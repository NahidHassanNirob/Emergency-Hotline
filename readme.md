### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   ans:
   #. getElementById
   এটা দিয়ে দিয়ে নির্দিষ্ট ID দেওয়া element কে পাওয়া যায়। এটি দিয়ে সবসময় মাত্র একটি element পাওয়া যায়।

   #. getElementsByClassName
   এটি একই class name এর সব element গুলোকে সিলেক্ট করে।
   এটি একই ক্লাস name এর একাধিক element রিটার্ন করতে পারে।
   HTMLCollection রিটার্ন করে।

   #. querySelector
   এটি দিয়ে যেকোনো CSS selector id, class, tag, attribute ইত্যাদি ব্যবহার করে element সিলেক্ট করা যায়।কিন্তু সব element থেকে কেবলমাত্র প্রথম যে emement মিলে সেই element রিটার্ন করে।

   #. querySelectorAll
   এটিও যেকোনো CSS selector ব্যবহার করে সব element সিলেক্ট করতে পারে।
   এটি সব মিল পাওয়া element গুলোকে রিটার্ন করে।
   এটি NodeList রিটার্ন করে

2. How do you **create and insert a new element into the DOM**?
   ans:
     <body>
     <div id="container"></div>

     <script>
     // 1. প্রথমে নতুন এলিমেন্ট তৈরি করতে হবে/
     const newElement = document.createElement("p");
   
     // 2. newElement er ভিতর কিছু লেখা বা style  দেওয়া যাবে
     newElement.textContent = "new paragraph";
     newElement.style.color= "red";
   
     // 3. DOM কোথায়  যোগ করবো সেটা সিলেক্ট করতে হবে 
     const container = document.getElementById("container");
     container.appendChild(newElement);
     </script>
     </body>

3. What is **Event Bubbling** and how does it work?
   ans: যখন কোনো এলিমেন্টে এ ইভেন্ট ঘটে, তখন সেই ইভেন্ট প্রথমে ঐ এলিমেন্টে ট্রিগার হয়। এরপর সেই ইভেন্ট ধাপে ধাপে তার প্যারেন্ট এলিমেন্ট, গ্র্যান্ডপ্যারেন্ট এলিমেন্ট এবং এর মতো আরও বড় বড় প্যারেন্ট এলিমেন্টগুলোতে একই ইভেন্ট চলে যায়। এটিই হচ্ছে Event Bubbling

   একটি বাটন এ ক্লিক করলে।
   ক্লিক ইভেন্ট প্রথমে ওই বাটনে কাজ করবে।
   তারপর ধাপে ধাপে সেই বাটনের প্যারেন্ট এলিমেন্টে যেমন div, body, html সেই ক্লিক ইভেন্ট চলে যাবে। এইভাবেই কাজ করে।

4. What is **Event Delegation** in JavaScript? Why is it useful?
   ans: Event Delegation মানে হলো , ছোট ছোট এলিমেন্টগুলোতে আলাদা আলাদা ইভেন্ট লিসেনার না বসিয়ে, তাদের প্যারেন্ট এলিমেন্টে একটা লিসেনার বসিয়ে কাজ করা।

   যদি পরে নতুন এলিমেন্ট DOM-এ যোগ হয়, আলাদা করে ইভেন্ট বসাতে হবে না। প্যারেন্ট এলিমেন্টের ইভেন্ট লিসেনার সেই নতুন এলিমেন্টের ইভেন্টও ধরতে পারবে।  
   সব ছোট ছোট এলিমেন্ট এ আলাদা আলাদা ইভেন্ট বসানো লাগে না তাই সময় কম লাগে এবং মেমোরি কম খরচ হয়।
   এইভাবে লেখলে কোড সুন্দর পরিস্কার হয়।

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   ans: preventDefault()---: ইভেন্টের যে ডিফল্ট আচরণ আছে সেটা বন্ধ করে দেয়।
   stopPropagation() ----:ইভেন্ট বাবলিং বা ক্যাপচারিং বন্ধ করে দেয়, মানে ইভেন্ট প্যারেন্ট এলিমেন্টে ছড়ায় না।
