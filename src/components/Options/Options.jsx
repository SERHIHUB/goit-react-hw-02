import css from "./Options.module.css";

function Options({ updateValues, feedbackReset, totalFeedback }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => updateValues("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateValues("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateValues("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={feedbackReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
