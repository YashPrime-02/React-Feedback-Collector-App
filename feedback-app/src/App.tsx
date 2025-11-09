import { FeedbackProvider } from "./context/FeedbackContext";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import "./index.css";

/**
 * App wrapper: FeedbackProvider holds global state.
 * App shows a two-column layout on wide screens: form + list.
 */
export default function App() {
  return (
       <>
       <div className="bg-orbs"></div><FeedbackProvider>

      <div className="bg-orbs"></div>

      <header className="header">
        <h1>Feedback Collector</h1>
      </header>

      <main className="container">
        <aside className="sidebar">
          <FeedbackForm />
        </aside>

        <section className="content">
          <FeedbackList />
        </section>
      </main>

    </FeedbackProvider></>
  );
}
