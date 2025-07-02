export const marked = {
  parse: (md: string): string => {
    const paragraphs = md.split(/\n{2,}/).map((paragraph) => {
      const html = paragraph
        // Replace links: [text](url)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Replace bold: **text**
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Replace italics: _text_
        .replace(/_(.+?)_/g, '<em>$1</em>')
        // Replace italics: *text*
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
      return `<p>${html}</p>`
    })

    return paragraphs.join('\n')
  },
}
