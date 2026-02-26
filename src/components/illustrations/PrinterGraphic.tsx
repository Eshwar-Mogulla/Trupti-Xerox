import React from 'react'

// xerox and document copying machine
const PrinterGraphic = ({ className }: { className?: string }) => (
  <img
    className={className + " object-cover rounded-lg shadow-lg"}
    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80"
    alt="Professional xerox copying machine"
  />
)

export default PrinterGraphic
