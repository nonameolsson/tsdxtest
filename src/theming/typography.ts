// The contents of this file is based on https://github.com/akveo/nebular/blob/master/src/framework/theme/styles/themes/_default.scss

/* Fonts and text styles - headings, subtitles, paragraphs, captions, button */

const FONT_FAMILY_PRIMARY = "Open Sans, sans-serif";
const FONT_FAMILY_SECONDARY = FONT_FAMILY_PRIMARY;

//#region Heading 1
const TEXT_HEADING_1_FONT_FAMILY = FONT_FAMILY_SECONDARY;
const TEXT_HEADING_1_FONT_SIZE = "2.25rem";
const TEXT_HEADING_1_FONT_WEIGHT = 700;
const TEXT_HEADING_1_LINE_HEIGHT = "3rem";
//#endregion

//#region Heading 2
const TEXT_HEADING_2_FONT_FAMILY = FONT_FAMILY_SECONDARY;
const TEXT_HEADING_2_FONT_SIZE = "2rem";
const TEXT_HEADING_2_FONT_WEIGHT = 700;
const TEXT_HEADING_2_LINE_HEIGHT = "2.5rem";
//#endregion

//#region Heading 3
const TEXT_HEADING_3_FONT_FAMILY = FONT_FAMILY_SECONDARY;
const TEXT_HEADING_3_FONT_SIZE = "1.875rem";
const TEXT_HEADING_3_FONT_WEIGHT = 700;
const TEXT_HEADING_3_LINE_HEIGHT = "2.5rem";
//#endregion

//#region Heading 4
const TEXT_HEADING_4_FONT_FAMILY = FONT_FAMILY_SECONDARY;
const TEXT_HEADING_4_FONT_SIZE = "1.625rem";
const TEXT_HEADING_4_FONT_WEIGHT = 700;
const TEXT_HEADING_4_LINE_HEIGHT = "2rem";
//#endregion

//#region Heading 5
const TEXT_HEADING_5_FONT_FAMILY = FONT_FAMILY_SECONDARY;
const TEXT_HEADING_5_FONT_SIZE = "1.375rem";
const TEXT_HEADING_5_FONT_WEIGHT = 700;
const TEXT_HEADING_5_LINE_HEIGHT = "2rem";
//#endregion

//#region Heading 6
const TEXT_HEADING_6_FONT_FAMILY = FONT_FAMILY_SECONDARY;
const TEXT_HEADING_6_FONT_SIZE = "1.125rem";
const TEXT_HEADING_6_FONT_WEIGHT = 700;
const TEXT_HEADING_6_LINE_HEIGHT = "1.5rem";
//#endregion

//#region Subtitle
const TEXT_SUBTITLE_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_SUBTITLE_FONT_SIZE = "0.9375rem";
const TEXT_SUBTITLE_FONT_WEIGHT = 600;
const TEXT_SUBTITLE_LINE_HEIGHT = "1.5rem";
//#endregion

//#region Subtitle 2
const TEXT_SUBTITLE_2_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_SUBTITLE_2_FONT_SIZE = "0.8125rem";
const TEXT_SUBTITLE_2_FONT_WEIGHT = 600;
const TEXT_SUBTITLE_2_LINE_HEIGHT = "1.5rem";
//#endregion

//#region Paragraph
const TEXT_PARAGRAPH_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_PARAGRAPH_FONT_SIZE = "0.9375rem";
const TEXT_PARAGRAPH_FONT_WEIGHT = 400;
const TEXT_PARAGRAPH_LINE_HEIGHT = "1.25rem";
//#endregion

//#region Paragraph 2
const TEXT_PARAGRAPH_2_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_PARAGRAPH_2_FONT_SIZE = "0.8125rem";
const TEXT_PARAGRAPH_2_FONT_WEIGHT = 400;
const TEXT_PARAGRAPH_2_LINE_HEIGHT = "1.125rem";
//#endregion

//#region Label
const TEXT_LABEL_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_LABEL_FONT_SIZE = "0.75rem";
const TEXT_LABEL_FONT_WEIGHT = 700;
const TEXT_LABEL_LINE_HEIGHT = "1rem";
//#endregion

//#region Caption
const TEXT_CAPTION_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_CAPTION_FONT_SIZE = "0.75rem";
const TEXT_CAPTION_FONT_WEIGHT = 400;
const TEXT_CAPTION_LINE_HEIGHT = "1rem";
//#endregion

//#region Caption 2
const TEXT_CAPTION_2_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_CAPTION_2_FONT_SIZE = "0.75rem";
const TEXT_CAPTION_2_FONT_WEIGHT = 600;
const TEXT_CAPTION_2_LINE_HEIGHT = "1rem";
//#endregion

//#region Button
const TEXT_BUTTON_FONT_FAMILY = FONT_FAMILY_PRIMARY;
const TEXT_BUTTON_FONT_WEIGHT = 700;
const TEXT_BUTTON_TINY_FONT_SIZE = "0.625rem";
const TEXT_BUTTON_TINY_LINE_HEIGHT = "0.75rem";
const TEXT_BUTTON_SMALL_FONT_SIZE = "0.75rem";
const TEXT_BUTTON_SMALL_LINE_HEIGHT = "1rem";
const TEXT_BUTTON_MEDIUM_FONT_SIZE = "0.875rem";
const TEXT_BUTTON_MEDIUM_LINE_HEIGHT = "1rem";
const TEXT_BUTTON_LARGE_FONT_SIZE = "1rem";
const TEXT_BUTTON_LARGE_LINE_HEIGHT = "1.25rem";
const TEXT_BUTTON_GIANT_FONT_SIZE = "1.125rem";
const TEXT_BUTTON_GIANT_LINE_HEIGHT = "1.5rem";
//#endregion

export const BASE_TYPOGRAPHY = {
  FONT_FAMILY_PRIMARY,
  FONT_FAMILY_SECONDARY,

  TEXT_HEADING_1_FONT_FAMILY,
  TEXT_HEADING_1_FONT_SIZE,
  TEXT_HEADING_1_FONT_WEIGHT,
  TEXT_HEADING_1_LINE_HEIGHT,

  TEXT_HEADING_2_FONT_FAMILY,
  TEXT_HEADING_2_FONT_SIZE,
  TEXT_HEADING_2_FONT_WEIGHT,
  TEXT_HEADING_2_LINE_HEIGHT,

  TEXT_HEADING_3_FONT_FAMILY,
  TEXT_HEADING_3_FONT_SIZE,
  TEXT_HEADING_3_FONT_WEIGHT,
  TEXT_HEADING_3_LINE_HEIGHT,

  TEXT_HEADING_4_FONT_FAMILY,
  TEXT_HEADING_4_FONT_SIZE,
  TEXT_HEADING_4_FONT_WEIGHT,
  TEXT_HEADING_4_LINE_HEIGHT,

  TEXT_HEADING_5_FONT_FAMILY,
  TEXT_HEADING_5_FONT_SIZE,
  TEXT_HEADING_5_FONT_WEIGHT,
  TEXT_HEADING_5_LINE_HEIGHT,

  TEXT_HEADING_6_FONT_FAMILY,
  TEXT_HEADING_6_FONT_SIZE,
  TEXT_HEADING_6_FONT_WEIGHT,
  TEXT_HEADING_6_LINE_HEIGHT,

  TEXT_SUBTITLE_FONT_FAMILY,
  TEXT_SUBTITLE_FONT_SIZE,
  TEXT_SUBTITLE_FONT_WEIGHT,
  TEXT_SUBTITLE_LINE_HEIGHT,

  TEXT_SUBTITLE_2_FONT_FAMILY,
  TEXT_SUBTITLE_2_FONT_SIZE,
  TEXT_SUBTITLE_2_FONT_WEIGHT,
  TEXT_SUBTITLE_2_LINE_HEIGHT,

  TEXT_PARAGRAPH_FONT_FAMILY,
  TEXT_PARAGRAPH_FONT_SIZE,
  TEXT_PARAGRAPH_FONT_WEIGHT,
  TEXT_PARAGRAPH_LINE_HEIGHT,

  TEXT_PARAGRAPH_2_FONT_FAMILY,
  TEXT_PARAGRAPH_2_FONT_SIZE,
  TEXT_PARAGRAPH_2_FONT_WEIGHT,
  TEXT_PARAGRAPH_2_LINE_HEIGHT,

  TEXT_LABEL_FONT_FAMILY,
  TEXT_LABEL_FONT_SIZE,
  TEXT_LABEL_FONT_WEIGHT,
  TEXT_LABEL_LINE_HEIGHT,

  TEXT_CAPTION_FONT_FAMILY,
  TEXT_CAPTION_FONT_SIZE,
  TEXT_CAPTION_FONT_WEIGHT,
  TEXT_CAPTION_LINE_HEIGHT,

  TEXT_CAPTION_2_FONT_FAMILY,
  TEXT_CAPTION_2_FONT_SIZE,
  TEXT_CAPTION_2_FONT_WEIGHT,
  TEXT_CAPTION_2_LINE_HEIGHT,

  TEXT_BUTTON_FONT_FAMILY,
  TEXT_BUTTON_FONT_WEIGHT,
  TEXT_BUTTON_TINY_FONT_SIZE,
  TEXT_BUTTON_TINY_LINE_HEIGHT,
  TEXT_BUTTON_SMALL_FONT_SIZE,
  TEXT_BUTTON_SMALL_LINE_HEIGHT,
  TEXT_BUTTON_MEDIUM_FONT_SIZE,
  TEXT_BUTTON_MEDIUM_LINE_HEIGHT,
  TEXT_BUTTON_LARGE_FONT_SIZE,
  TEXT_BUTTON_LARGE_LINE_HEIGHT,
  TEXT_BUTTON_GIANT_FONT_SIZE,
  TEXT_BUTTON_GIANT_LINE_HEIGHT,
};
export type TBaseTypography = typeof BASE_TYPOGRAPHY;

/**
 * Type used allowing user to create a typed override object for typography in theme.
 *
 * Code sample:
 *
 * ```ts
 * const customTypography: TCustomTypography = {
 *   FONT_FAMILY_PRIMARY = 'Wingdings',
 *   TEXT_HEADING_1_FONT_FAMILY = 'Arial',
 *   TEXT_HEADING_1_FONT_SIZE = '8rem'
 * }
 *
 * const theme = createTheme([Button, Card], {
 *   colors: { primary: 'blue', secondary: 'red', accent: 'green'},
 *   Button: { background: 'green' },
 *   Card: { color: 'red' },
 *   typography: customTypography
 * })
 * ```
 */
export type TCustomTypography = Partial<TBaseTypography>;
