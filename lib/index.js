import * as expression from './transforms/expression'
import * as raw from './transforms/raw'
import * as template from './transforms/template'
import * as on from './transforms/on'

export default ({ transform }) => {
  transform(expression.getter, expression.deal)
  transform(raw.getter, raw.deal)
  transform(template.getter, template.deal)
  transform(on.getter, on.deal)
}
