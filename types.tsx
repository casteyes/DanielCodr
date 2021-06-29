/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
  route: undefined;
  params: undefined;
};

export type BottomTabParamList = {
  Chats: undefined;
  Friends: undefined;
  Teams: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
  status: String;
}

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;

}

export type ChatRoom ={
id: String;
users: User[];
lastMessage: Message;
route: undefined;
};