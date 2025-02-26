interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // In a real app, this would use a router
    if (href === '/') {
      window.location.reload();
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}