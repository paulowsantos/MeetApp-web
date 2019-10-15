import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#FF506F" size={35} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>New Enrollment for your Meetapp React Native!</p>
            <time>2 days ago</time>
            <button type="button">mark as read</button>
          </Notification>
          <Notification>
            <p>New Enrollment for your Meetapp React Native!</p>
            <time>2 days ago</time>
            <button type="button">mark as read</button>
          </Notification>
          <Notification>
            <p>New Enrollment for your Meetapp React Native!</p>
            <time>2 days ago</time>
            <button type="button">mark as read</button>
          </Notification>
          <Notification>
            <p>New Enrollment for your Meetapp React Native!</p>
            <time>2 days ago</time>
            <button type="button">mark as read</button>
          </Notification>
          <Notification>
            <p>New Enrollment for your Meetapp React Native!</p>
            <time>2 days ago</time>
            <button type="button">mark as read</button>
          </Notification>
          <Notification>
            <p>New Enrollment for your Meetapp React Native!</p>
            <time>2 days ago</time>
            <button type="button">mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
