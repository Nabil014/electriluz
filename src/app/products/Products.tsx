import { products } from '@/moks/products.json'
import Pagination from '@/components/Pagination'

export default function Products() {
  return (
    <div>
      <Pagination items={products} />
    </div>
  )
}
