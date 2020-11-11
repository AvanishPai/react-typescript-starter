import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';

import styles from './styles';

export type Props = {
  /** Message text */
  text: string;
  /** Time of sending of message */
  time: string;
  /** status of the message can be one of sent, delivered, read, or unsent */
  status: 'sent' | 'delivered' | 'read' | 'unsent';
} & WithStyles<typeof styles>;

function Message(props: Props) {
  return <div className={props.classes.text}>{props.text}</div>;
}

export default withStyles(styles)(Message);
