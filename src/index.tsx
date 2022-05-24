import ChatWidget from './components/ChatWidget';
import ChatWindow from './components/ChatWindow';

export const open = () => window.dispatchEvent(new Event('antbuddy:open'));
export const close = () => window.dispatchEvent(new Event('antbuddy:close'));
export const toggle = () => window.dispatchEvent(new Event('antbuddy:toggle'));

export const identify = () => {
  // TODO: add ability to create/update customer information
  console.warn('`AntBuddy.identify` has not been implemented yet!');
};

export const AntBuddy = {
  open,
  close,
  toggle,
};

export {ChatWidget, ChatWindow};

export default ChatWidget;
