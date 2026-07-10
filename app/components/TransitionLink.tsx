"use client";

import React from "react";
import { useTransition } from "./TransitionProvider";

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  ...props
}: TransitionLinkProps) {
  const { navigateTo } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default routing
    e.preventDefault();

    // Run any caller-provided handler first (e.g. closing the menu),
    // then trigger our custom animated ladder navigation.
    onClick?.(e);
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
