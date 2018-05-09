import {
  State, compose, lensPath,
  lensProp, not, over
} from '../helpers'

const { modify } = State

const lnsFilterGroups =
  lensPath([ 'ui', 'filterGroups' ])

export const toggleFilterGroup = ({ group }) => {
  const lns = compose(
    lnsFilterGroups,
    lensProp(group)
  )

  return modify(over(lns, not))
}

