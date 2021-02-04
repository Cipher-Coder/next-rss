import feeds from '../data/feeds'
import Page from '../components/Page'
import FeedList from '../components/FeedList'

export default function Index() {
  return (
    <Page>
      <FeedList feeds={feeds} />
    </Page>
  )
}
