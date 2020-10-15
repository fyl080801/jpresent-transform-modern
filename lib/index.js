import expression from './transforms/expression'
import raw from './transforms/raw'
import template from './transforms/template'
import on from './transforms/on'

export default ({ transform }) => {
  transform(expression)
  transform(raw)
  transform(template)
  transform(on)
}
