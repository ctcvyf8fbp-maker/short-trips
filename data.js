// =====================================================================
//  קובץ הנתונים – זה הקובץ היחיד שצריך לעדכן!
//  סטטוס אישור: "אושר" / "ממתין" / "בטיפול" / "נדחה"
//  ויזה, מקדמה, התחשבנות ומסמכים: "יש" / "אין"
//  תאריך בפורמט: "2026-12-15" (שנה-חודש-יום), או "" אם אין
//  בראשי תיבות כותבים \" במקום גרש כפול, למשל "קמנ\"ר"
//  בכל רשימה: פסיק אחרי כל שורה, חוץ מהשורה האחרונה
//  destination ו-notes לא חובה – אפשר להשאיר ""
// =====================================================================

// קישורים לגיליונות Google Sheets שפורסמו כ-CSV (קובץ > שיתוף > פרסום באינטרנט).
// אם יש כאן קישור – האתר קורא את הנתונים מהגיליון, ואין צורך לערוך את TRIPS שלמטה.
// SHEET_CSV_URL = הלשונית של נסיעות מש"ב
// SHEET_CSV_URL_NASAH = הלשונית של נסיעות נס"ח
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtPQgfg9nmlw4-UYy2u_19lQ1Kfy-kQTwnz9A2zGj_n8q5SkwNb5ZstY9ikJRNaURvNd4IC_DF-RgH/pub?gid=276988776&single=true&output=csv";
const SHEET_CSV_URL_NASAH = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtPQgfg9nmlw4-UYy2u_19lQ1Kfy-kQTwnz9A2zGj_n8q5SkwNb5ZstY9ikJRNaURvNd4IC_DF-RgH/pub?gid=1084406962&single=true&output=csv";
// SHEET_CSV_URL_PEOPLE = הלשונית של המשתתפים (ויזה, מקדמה, התחשבנות)
const SHEET_CSV_URL_PEOPLE = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtPQgfg9nmlw4-UYy2u_19lQ1Kfy-kQTwnz9A2zGj_n8q5SkwNb5ZstY9ikJRNaURvNd4IC_DF-RgH/pub?gid=921306285&single=true&output=csv";

// קישור להעלאת דרכונים (למשל Dropbox File Request). אם ריק – הכפתור לא מופיע.
const PASSPORT_UPLOAD_LINK = "";

const LAST_UPDATED = "2026-11-11";

const TRIPS = [

  // ===================== נסיעה 1 =====================
  {
    type: "מש\"ב",
    name: "אינקה פירוק",
    start: "2026-12-13",
    end: "2026-12-18",
    destination: "",            // יעד (לא חובה)
    notes: "",                  // הערות חופשיות, למשל מה תקוע (לא חובה)

    participants: [
      { name: "לי יפרח", visa: "אין", advance: "אין", settlement: "אין" },
      { name: "יונתן עקירב", visa: "אין", advance: "אין", settlement: "אין" },
      { name: "שקד סבו", visa: "אין", advance: "אין", settlement: "אין" },
      { name: "עידן פניגר", visa: "אין", advance: "אין", settlement: "אין" },
      { name: "שירן מנחימוב", visa: "אין", advance: "אין", settlement: "אין" }
    ],

    approvals: [
      { role: "מפקד היחידה", status: "ממתין", date: "" },
      { role: "מפקד מש\"ב", status: "ממתין", date: "" },
      { role: "דבל\"א", status: "ממתין", date: "" },
      { role: "יחב\"ם", status: "ממתין", date: "" },
      { role: "קמנ\"ר", status: "ממתין", date: "" },
      { role: "ראש אמ\"ן", status: "ממתין", date: "" },
      { role: "תבל", status: "ממתין", date: "" },
      { role: "יועכ\"ל", status: "ממתין", date: "" },
      { role: "הזרמה במערכת", status: "ממתין", date: "" },
      { role: "נספחות", status: "ממתין", date: "" },
      { role: "משהב\"ט", status: "ממתין", date: "" }
    ],

    documents: [
      { name: "פורמט מו\"ג", ready: "אין" },
      { name: "נספח אבטחה", ready: "אין" },
      { name: "טופס התראה", ready: "אין" },
      { name: "מכתב הנמקה", ready: "אין" },
      { name: "טופס תבל", ready: "אין" }
    ]
  },

  // ===================== נסיעה 2 =====================
  {
    type: "מש\"ב",
    name: "אלגוריתמיקה",
    start: "2027-01-31",
    end: "2027-02-05",
    destination: "",
    notes: "",

    participants: [
      { name: "ליאור בק", visa: "יש", advance: "אין", settlement: "אין" },
      { name: "גל כהן", visa: "יש", advance: "אין", settlement: "אין" },
      { name: "ערבה אריכא", visa: "יש", advance: "אין", settlement: "אין" }
    ],

    approvals: [
      { role: "מפקד היחידה", status: "אושר", date: "" },
      { role: "מפקד מש\"ב", status: "ממתין", date: "" },
      { role: "דבל\"א", status: "אושר", date: "" },
      { role: "יחב\"ם", status: "אושר", date: "" },
      { role: "קמנ\"ר", status: "אושר", date: "" },
      { role: "ראש אמ\"ן", status: "אושר", date: "" },
      { role: "תבל", status: "אושר", date: "" },
      { role: "יועכ\"ל", status: "ממתין", date: "" },
      { role: "הזרמה במערכת", status: "ממתין", date: "" },
      { role: "נספחות", status: "ממתין", date: "" },
      { role: "משהב\"ט", status: "ממתין", date: "" }
    ],

    documents: [
      { name: "פורמט מו\"ג", ready: "יש" },
      { name: "נספח אבטחה", ready: "יש" },
      { name: "טופס התראה", ready: "יש" },
      { name: "מכתב הנמקה", ready: "יש" },
      { name: "טופס תבל", ready: "יש" }
    ]
  },

  // ===================== נסיעה 3 =====================
  {
    type: "מש\"ב",
    name: "הגעה לארץ – רביד גבע",
    start: "2027-01-16",
    end: "2027-01-25",
    destination: "",
    notes: "",

    participants: [
      { name: "רביד גבע", visa: "אין", advance: "אין", settlement: "אין" }
    ],

    approvals: [
      { role: "מפקד היחידה", status: "אושר", date: "" },
      { role: "מפקד מש\"ב", status: "אושר", date: "" },
      { role: "דבל\"א", status: "אושר", date: "" },
      { role: "יחב\"ם", status: "אושר", date: "" },
      { role: "קמנ\"ר", status: "אושר", date: "" },
      { role: "ראש אמ\"ן", status: "אושר", date: "" },
      { role: "תבל", status: "אושר", date: "" },
      { role: "יועכ\"ל", status: "אושר", date: "" },
      { role: "הזרמה במערכת", status: "אושר", date: "" },
      { role: "נספחות", status: "אושר", date: "" },
      { role: "משהב\"ט", status: "ממתין", date: "" }
    ],

    documents: [
      { name: "פורמט מו\"ג", ready: "יש" },
      { name: "מכתב הנמקה", ready: "יש" },
      { name: "טופס תבל", ready: "יש" }
    ]
  }
];
