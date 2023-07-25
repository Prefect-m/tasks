import React, { forwardRef } from "react"

export const Filed = forwardRef(({ type, className, ...props }, ref) => {
	return <input type={type} className={className} ref={ref} {...props} />
})
