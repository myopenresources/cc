import { equalTo } from './equal-to/equal-to';
import { email } from './email/email';
import { number } from './number/number';
import { url } from './url/url';

export const CustomValidators: any = {
   'equalTo': equalTo,
   'email':email,
   'number':number,
   'url':url

}