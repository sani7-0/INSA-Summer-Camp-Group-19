import React from "react"

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-900",
    outline: "border border-gray-300 bg-white text-gray-900"
  }
  
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant] || variants.default} ${className || ""}`}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }