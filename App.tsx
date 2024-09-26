import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://cartpost-web.web.app/' }}
      style={{ marginTop: 20 }}
    />
  );
}
