import * as React from 'react';
import { Input } from '@mui/base/Input';
import { styled } from '@mui/system';
import Button, { ButtonProps } from '@mui/material/Button';

const ChatContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%; /* Make the container take the full viewport height */
  padding: 8px  8px  8px  8px; /* Add spacing around the container */
  margin: 8px 8px 8px 8px; /* Add spacing around the container */
  width: 100%; /* Make the container take the full viewport width */
`;

const ChatInputContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center; /* Align content at the bottom */
  height: auto; /* Reset height to auto */
  width: 100%; /* Make the container take the full viewport width */
  padding: 8px  8px  8px  8px; /* Add padding to the input container */
  margin: 8px 8px 8px 8px; /* Add spacing around the container */
`;

const UserMessageBubble = styled('div')`
  background-color: #be375f;
  color: white;
  border-radius: 12px 12px 0px 12px;
  margin: 8px 8px 8px 8px;
  padding: 8px 8px 8px 8px;
  max-width: 80%; /* Limit the width of the message bubble */
  word-wrap: break-word; /* Allow text to wrap when it exceeds the width */
  align-self: flex-end; /* Align user messages to the right */
`;

const OtherUserMessageBubble = styled(UserMessageBubble)`
  background-color: #ed8554; /* Different color for other user messages */
  color: white;
  align-self: flex-start; /* Align other user messages to the left */
  border-radius: 12px 12px 12px 0px;
`;

const ChatInput = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});


interface CustomButtonProps extends ButtonProps {
    customStyle?: React.CSSProperties; // Optional custom styles
  }
  
  const CustomButton: React.FC<CustomButtonProps> = ({ children, customStyle, ...props }) => {
    const buttonStyle: React.CSSProperties = {
      borderRadius: '12px',
      margin: '8px 8px 8px 8px',
      ...customStyle, // Merge custom styles with default styles
    };
  
    return (
      <div>
        <Button {...props} style={buttonStyle}>
          {children}
        </Button>
      </div>
    );
  };
  

export default function ChatWindow() {
  const [messages, setMessages] = React.useState<{ text: string; user: string }[]>([]);
  const [inputMessage, setInputMessage] = React.useState<string>('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Add the user's message
      setMessages([...messages, { text: inputMessage, user: 'user' }]);
      setInputMessage('');
    }
  };

  const handleOtherUserMessage = () => {
    if (inputMessage.trim() !== '') {
        // Add the user's message
        setMessages([...messages, { text: inputMessage, user: 'other' }]);
        setInputMessage('');
    }
  };

  return (
    <ChatContainer>
      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: message.user === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            {message.user === 'user' ? (
              <UserMessageBubble>{message.text}</UserMessageBubble>
            ) : (
              <OtherUserMessageBubble>{message.text}</OtherUserMessageBubble>
            )}
          </div>
        ))}
      </div>
      <ChatInputContainer>

      <CustomButton variant="contained" onClick={handleOtherUserMessage} customStyle={{ backgroundColor: '#ed8554', color: 'white' }}>
        Send
      </CustomButton>


        <ChatInput
          aria-label="Chat Input"
          placeholder="Ask me anything…"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />

      <CustomButton variant="contained" onClick={handleSendMessage} customStyle={{ backgroundColor: '#be375f',  color: 'white'}}>
        Send
      </CustomButton>

      </ChatInputContainer>
    </ChatContainer>
  );
}


const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);


