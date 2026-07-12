import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    industry: "Manufacturing",
    serviceInterest: "Digital Marketing",
    goals: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.countryCode) {
      nextErrors.countryCode = "Select a country code.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (phoneDigits.length !== 10) {
      nextErrors.phone = "Phone number must be exactly 10 digits.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

      if (!SCRIPT_URL) {
        throw new Error("VITE_SCRIPT_URL is not set");
      }

      // Create URL parameters
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("countryCode", formData.countryCode);
      params.append("phone", `${formData.countryCode}${formData.phone}`);
      params.append("email", formData.email);
      params.append("industry", formData.industry);
      params.append("serviceInterest", formData.serviceInterest);
      params.append("goals", formData.goals);

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: params
      });

      const responseText = await response.text();
      let result = null;

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText);
        } catch {
          result = { success: response.ok, message: responseText.trim() };
        }
      } else {
        result = { success: response.ok, message: "Form submitted successfully." };
      }

      if (response.ok && result.success !== false) {
        setMessage("✅ " + result.message);
        setFormData({
          name: "",
          countryCode: "+91",
          phone: "",
          email: "",
          industry: "Manufacturing",
          serviceInterest: "Digital Marketing",
          goals: "",
        });
      } else {
        setMessage("❌ " + (result?.message || "An error occurred"));
      }
    } catch (error) {
      setMessage("❌ Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-t border-border-subtle bg-surface-muted py-24" id="contact">
      <div className="site-container grid gap-20 lg:grid-cols-2">
        <div className="reveal-left">
          <h2 className="mb-6 font-h2 text-h1 text-on-surface">Let us Grow Together</h2>
          <p className="mb-10 text-body-lg text-secondary">
            Ready to automate your operations and skyrocket your digital presence? Fill out the form and our experts will be in touch within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined rounded-full bg-primary-fixed p-3 text-primary">mail</span>
              <a className="text-body-md font-semibold hover:underline" href="mailto:info@durozen.in">
                info@durozen.in
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined rounded-full bg-primary-fixed p-3 text-primary">phone</span>
              <a className="text-body-md font-semibold hover:underline" href="tel:+918122339694">
                +(91) 81223 39694
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined rounded-full bg-primary-fixed p-3 text-primary">location_on</span>
              <span className="text-body-md font-semibold">Namakkal</span>
            </div>
          </div>
        </div>

        <div className="reveal-right rounded-2xl border border-border-subtle bg-white p-8 shadow-sm">
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Name</label>
              <input 
                className={`rounded-lg border px-4 py-3 font-body-md outline-none transition-all focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-border-subtle focus:ring-primary"}`} 
                placeholder="Pradeep Kumar" 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                required
              />
              {errors.name && <p className="text-sm font-medium text-red-600">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Country Code</label>
              <select 
                className={`rounded-lg border bg-white px-4 py-3 font-body-md outline-none focus:ring-2 ${errors.countryCode ? "border-red-500 focus:ring-red-500" : "border-border-subtle focus:ring-primary"}`}
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                aria-invalid={Boolean(errors.countryCode)}
              >
                <option value="+1">+1</option>
                <option value="+7">+7</option>
                <option value="+20">+20</option>
                <option value="+27">+27</option>
                <option value="+30">+30</option>
                <option value="+31">+31</option>
                <option value="+32">+32</option>
                <option value="+33">+33</option>
                <option value="+34">+34</option>
                <option value="+36">+36</option>
                <option value="+39">+39</option>
                <option value="+40">+40</option>
                <option value="+41">+41</option>
                <option value="+43">+43</option>
                <option value="+44">+44</option>
                <option value="+45">+45</option>
                <option value="+46">+46</option>
                <option value="+47">+47</option>
                <option value="+48">+48</option>
                <option value="+49">+49</option>
                <option value="+51">+51</option>
                <option value="+52">+52</option>
                <option value="+53">+53</option>
                <option value="+54">+54</option>
                <option value="+55">+55</option>
                <option value="+56">+56</option>
                <option value="+57">+57</option>
                <option value="+58">+58</option>
                <option value="+60">+60</option>
                <option value="+61">+61</option>
                <option value="+62">+62</option>
                <option value="+63">+63</option>
                <option value="+64">+64</option>
                <option value="+65">+65</option>
                <option value="+66">+66</option>
                <option value="+81">+81</option>
                <option value="+82">+82</option>
                <option value="+84">+84</option>
                <option value="+86">+86</option>
                <option value="+90">+90</option>
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
                <option value="+94">+94</option>
                <option value="+95">+95</option>
                <option value="+98">+98</option>
                <option value="+211">+211</option>
                <option value="+212">+212</option>
                <option value="+213">+213</option>
                <option value="+216">+216</option>
                <option value="+218">+218</option>
                <option value="+220">+220</option>
                <option value="+221">+221</option>
                <option value="+222">+222</option>
                <option value="+223">+223</option>
                <option value="+224">+224</option>
                <option value="+225">+225</option>
                <option value="+226">+226</option>
                <option value="+227">+227</option>
                <option value="+228">+228</option>
                <option value="+229">+229</option>
                <option value="+230">+230</option>
                <option value="+231">+231</option>
                <option value="+232">+232</option>
                <option value="+233">+233</option>
                <option value="+234">+234</option>
                <option value="+235">+235</option>
                <option value="+236">+236</option>
                <option value="+237">+237</option>
                <option value="+238">+238</option>
                <option value="+239">+239</option>
                <option value="+240">+240</option>
                <option value="+241">+241</option>
                <option value="+242">+242</option>
                <option value="+243">+243</option>
                <option value="+244">+244</option>
                <option value="+245">+245</option>
                <option value="+246">+246</option>
                <option value="+248">+248</option>
                <option value="+249">+249</option>
                <option value="+250">+250</option>
                <option value="+251">+251</option>
                <option value="+252">+252</option>
                <option value="+253">+253</option>
                <option value="+254">+254</option>
                <option value="+255">+255</option>
                <option value="+256">+256</option>
                <option value="+257">+257</option>
                <option value="+258">+258</option>
                <option value="+260">+260</option>
                <option value="+261">+261</option>
                <option value="+262">+262</option>
                <option value="+263">+263</option>
                <option value="+264">+264</option>
                <option value="+265">+265</option>
                <option value="+266">+266</option>
                <option value="+267">+267</option>
                <option value="+268">+268</option>
                <option value="+269">+269</option>
                <option value="+290">+290</option>
                <option value="+291">+291</option>
                <option value="+297">+297</option>
                <option value="+298">+298</option>
                <option value="+299">+299</option>
                <option value="+350">+350</option>
                <option value="+351">+351</option>
                <option value="+352">+352</option>
                <option value="+353">+353</option>
                <option value="+354">+354</option>
                <option value="+355">+355</option>
                <option value="+356">+356</option>
                <option value="+357">+357</option>
                <option value="+358">+358</option>
                <option value="+359">+359</option>
                <option value="+370">+370</option>
                <option value="+371">+371</option>
                <option value="+372">+372</option>
                <option value="+373">+373</option>
                <option value="+374">+374</option>
                <option value="+375">+375</option>
                <option value="+376">+376</option>
                <option value="+377">+377</option>
                <option value="+378">+378</option>
                <option value="+380">+380</option>
                <option value="+381">+381</option>
                <option value="+382">+382</option>
                <option value="+383">+383</option>
                <option value="+385">+385</option>
                <option value="+386">+386</option>
                <option value="+387">+387</option>
                <option value="+389">+389</option>
                <option value="+420">+420</option>
                <option value="+421">+421</option>
                <option value="+423">+423</option>
                <option value="+500">+500</option>
                <option value="+501">+501</option>
                <option value="+502">+502</option>
                <option value="+503">+503</option>
                <option value="+504">+504</option>
                <option value="+505">+505</option>
                <option value="+506">+506</option>
                <option value="+507">+507</option>
                <option value="+508">+508</option>
                <option value="+509">+509</option>
                <option value="+590">+590</option>
                <option value="+591">+591</option>
                <option value="+592">+592</option>
                <option value="+593">+593</option>
                <option value="+594">+594</option>
                <option value="+595">+595</option>
                <option value="+596">+596</option>
                <option value="+597">+597</option>
                <option value="+598">+598</option>
                <option value="+599">+599</option>
                <option value="+670">+670</option>
                <option value="+672">+672</option>
                <option value="+673">+673</option>
                <option value="+674">+674</option>
                <option value="+675">+675</option>
                <option value="+676">+676</option>
                <option value="+677">+677</option>
                <option value="+678">+678</option>
                <option value="+679">+679</option>
                <option value="+680">+680</option>
                <option value="+681">+681</option>
                <option value="+682">+682</option>
                <option value="+683">+683</option>
                <option value="+685">+685</option>
                <option value="+686">+686</option>
                <option value="+687">+687</option>
                <option value="+688">+688</option>
                <option value="+689">+689</option>
                <option value="+690">+690</option>
                <option value="+691">+691</option>
                <option value="+692">+692</option>
                <option value="+850">+850</option>
                <option value="+852">+852</option>
                <option value="+853">+853</option>
                <option value="+855">+855</option>
                <option value="+856">+856</option>
                <option value="+880">+880</option>
                <option value="+886">+886</option>
                <option value="+960">+960</option>
                <option value="+961">+961</option>
                <option value="+962">+962</option>
                <option value="+963">+963</option>
                <option value="+964">+964</option>
                <option value="+965">+965</option>
                <option value="+966">+966</option>
                <option value="+967">+967</option>
                <option value="+968">+968</option>
                <option value="+970">+970</option>
                <option value="+971">+971</option>
                <option value="+972">+972</option>
                <option value="+973">+973</option>
                <option value="+974">+974</option>
                <option value="+975">+975</option>
                <option value="+976">+976</option>
                <option value="+977">+977</option>
                <option value="+992">+992</option>
                <option value="+993">+993</option>
                <option value="+994">+994</option>
                <option value="+995">+995</option>
                <option value="+996">+996</option>
                <option value="+998">+998</option>
              </select>
              {errors.countryCode && <p className="text-sm font-medium text-red-600">{errors.countryCode}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
              <input 
                className={`rounded-lg border px-4 py-3 font-body-md outline-none transition-all focus:ring-2 ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-border-subtle focus:ring-primary"}`} 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={10}
                placeholder="9876543210"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && <p className="text-sm font-medium text-red-600">{errors.phone}</p>}
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Email</label>
              <input 
                className={`rounded-lg border px-4 py-3 font-body-md outline-none transition-all focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-border-subtle focus:ring-primary"}`} 
                placeholder="agnabyte@gmail.com" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                required
              />
              {errors.email && <p className="text-sm font-medium text-red-600">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Industry</label>
              <select 
                className="rounded-lg border border-border-subtle bg-white px-4 py-3 font-body-md outline-none focus:ring-2 focus:ring-primary"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
              >
                <option>Manufacturing</option>
                <option>Healthcare</option>
                <option>Real Estate</option>
                <option>E-Commerce</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Service Interest</label>
              <select 
                className="rounded-lg border border-border-subtle bg-white px-4 py-3 font-body-md outline-none focus:ring-2 focus:ring-primary"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
              >
                <option>Digital Marketing</option>
                <option>Business Automation</option>
                <option>Web Development</option>
                <option>Full Scale Growth</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Goals</label>
              <textarea 
                className="rounded-lg border border-border-subtle px-4 py-3 font-body-md outline-none transition-all focus:ring-2 focus:ring-primary" 
                placeholder="Tell us about your business goals..." 
                rows="4"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
              />
            </div>
            {message && (
              <div className="md:col-span-2 rounded-lg p-3 text-sm font-semibold" style={{
                backgroundColor: message.includes("✅") ? "#d1fae5" : "#fee2e2",
                color: message.includes("✅") ? "#065f46" : "#991b1b"
              }}>
                {message}
              </div>
            )}
            <button 
              className="flex items-center justify-center gap-2 rounded-lg bg-primary py-4 font-label-md text-on-primary transition-all hover:opacity-90 md:col-span-2 disabled:opacity-50" 
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Book Free Strategy Call"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection