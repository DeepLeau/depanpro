import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export function Button({
  variant = 'ghost',
  size = 'md',
  className,
  children,
  as: Component = 'button',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-[var(--color-warm-white)] text-[var(--color-void-canvas)] hover:bg-[var(--color-pure-white)]',
    ghost: 'bg-[rgba(255,255,255,0.04)] text-[var(--color-warm-white)] hover:bg-[var(--color-iron-surface)] border border-[var(--color-graphite-lift)]',
    dark: 'bg-[var(--color-graphite-lift)] text-[var(--color-warm-white)] hover:bg-[var(--color-slate-hover)]',
  }
  
  const sizes = {
    sm: 'h-8 px-3 text-xs rounded-[var(--radius-sm)]',
    md: 'h-9 px-4 text-sm rounded-[var(--radius-sm)]',
    lg: 'h-10 px-5 text-sm rounded-[var(--radius-sm)]',
  }

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  if (Component === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
