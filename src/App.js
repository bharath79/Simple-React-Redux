import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PostForm />
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
