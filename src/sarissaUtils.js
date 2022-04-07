import { DateTime } from "luxon";
import Config from "./sarissa.config.cjs";

const capitalize = ([firstLetter, ...restOfWord]) =>
  firstLetter.toUpperCase() + restOfWord.join("");

const formatDate = (date) =>
  DateTime.fromISO(new Date(date).toISOString()).toFormat(Config.dateFormat);

const getCategoryColour = (name) => {
  var defaultColor = Config.categorySettings?.color ?? "btn-primary";
  if (Config.categories) {
    const categoryColors = Object.assign(
      {},
      ...Config.categories.map((x) => ({
        [x.name.toLowerCase()]: x.color ?? defaultColor,
      }))
    );
    return categoryColors[name.toLowerCase()] ?? defaultColor;
  }
  return defaultColor;
};

export { capitalize, formatDate, getCategoryColour };
