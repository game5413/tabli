import * as React from 'react'
import * as styles from './cssStyles'
import { cx, css } from 'emotion'
import FlatButton from './FlatButton'

const messageCardBaseStyle = css({
  padding: 0
})
const messageCardStyle = cx(styles.tabWindow, styles.tabWindowFocused, messageCardBaseStyle)

const cardActionsStyle = css({
  display: 'inline-flex',
  flexDirection: 'row-reverse',
  paddingRight: 16,
  paddingBottom: 16,
  position: 'relative'
})

/*
 * Layout / design based on Card from Material UI:
 *
 * http://www.material-ui.com/#/components/card
 */
class MessageCard extends React.Component {
  render () {
    const rawMarkup = { __html: this.props.content }

    return (
      <div className={messageCardStyle}>
        <div className='cardContent' dangerouslySetInnerHTML={rawMarkup} />
        <div className={cardActionsStyle}>
          <FlatButton label='GOT IT' onClick={this.props.onClick} />
        </div>
      </div>
    )
  }
}

export default MessageCard
