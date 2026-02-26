// stacks of copied and printed documents
const DocumentGraphic = ({ className }: { className?: string }) => (
  <img
    className={className + " object-cover rounded-lg shadow-lg"}
    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    alt="Photocopied and printed documents"
  />
)

export default DocumentGraphic
