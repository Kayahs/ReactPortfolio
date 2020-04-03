import queryResolvers from './query/queryResolvers'
import unionResolvers from './union/unionResolvers'
const AllResolvers = { ...queryResolvers, ...unionResolvers }
export default AllResolvers
