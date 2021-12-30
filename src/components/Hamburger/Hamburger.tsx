import classNames from 'classnames'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <div
      data-testid="hamburger"
      className={classNames('fixed', 'block', 'z-40', 'top-md', 'right-md', 'cursor-pointer')}
      onClick={onClick}
    >
      {['top', 'middle', 'bottom'].map((position) => {
        return (
          <span
            key={position}
            className={classNames(
              'block',
              'w-[24px]',
              'h-[3px]',
              'mx-auto',
              'my-[4px]',
              'bg-grey',
              'ease-linear',
              'duration-100',
              { 'translate-y-[8px]': isOpen && position === 'top', 'rotate-45': isOpen && position === 'top' },
              { 'opacity-0': isOpen && position === 'middle' },
              {
                'translate-y-[-6px]': isOpen && position === 'bottom',
                'rotate-[-45deg]': isOpen && position === 'bottom',
              },
              'md:hidden',
            )}
          ></span>
        )
      })}
    </div>
  )
}

export default Hamburger
