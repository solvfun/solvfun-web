/**
 * 两份法律文本共用的定值。
 *
 * 单独拎出来是因为它们**必须逐字一致**：联系邮箱在 ToS 的仲裁条款里既是
 * 争议通知地址又是 30 天 opt-out 地址，在隐私政策里是数据权利的行使地址，
 * 任何一处对不上都会削弱条款的可执行性。
 */

/** ⚠️ 改这个之前先确认新地址真能收信——Play 审核会实际寄信验证。 */
export const LEGAL_CONTACT_EMAIL = "support@solv.fun";

/** 署名主体。Wyoming LLC，与 Play 开发者账号同名。 */
export const LEGAL_ENTITY = "Abidon Labs LLC";

/** 文本自我引用的托管地址（"we will post any changes at ..."）。 */
export const PRIVACY_URL = "https://www.solv.fun/privacy";
export const TERMS_URL = "https://www.solv.fun/terms";

/** 费率公示页。服务条款 §5 指向它——**法律文本里的费率数字全都住在这一页**。 */
export const FEES_URL = "https://www.solv.fun/fees";
