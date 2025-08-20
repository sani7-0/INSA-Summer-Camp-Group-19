import React from "react"

const Button = React.forwardRef(({ className, size, ...props }, ref) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${sizeClasses[size] || sizeClasses.default} ${className || ""}`}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }