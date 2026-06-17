"use client";
import React from "react";
import Link from "next/link";

export default function Button({ href, onClick, children, variant = "primary", className = "" }) {
  const base = variant === "primary" ? "btn-primary" : "btn-outline";
  if (href) {
    return (
      <React.Fragment>
        <Link href={href} className={`${base} ${className}`} aria-label={typeof children === 'string' ? children : 'button'}>
          {children}
        </Link>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <button onClick={onClick} className={`${base} ${className}`}>
        {children}
      </button>
    </React.Fragment>
  );
}
