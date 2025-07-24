export interface INotification {
  _id: number;
  user_id: number;
  type: 'order' | 'shipping' | 'event' | 'message' | string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}
