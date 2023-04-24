import React from "react";

import Emphasis from "../components/Emphasis";

export default function Product() {
  const paragraphFormat = `text-gray-900 dark:text-gray-50 text-lg font-light dark:font-extralight   py-2 `;
  const tempHighlight = ` text-red-600 dark:text-red-300 `;
  const ulFormat = `list-disc list-inside ml-5 text-gray-900 dark:text-gray-50 text-lg font-light dark:font-extralight space-y-2 `;
  const sectionFormat = `ml-5 text-gray-900 dark:text-gray-50 text-lg font-light dark:font-extralight py-2 `;
  const subTitleFormat = `text-gray-700 dark:text-gray-50 text-2xl  py-4`;
  const inlineTitleFormat = `text-blue-700 dark:text-blue-400 font-bold `;
  const strengthFormat = ` font-bold`;
  return (
    <main>
      <div className="my-5 lg:my-10">
        <div className="max-w-6xl m-auto p-6">
          <h2 className="text-4xl  font-light py-4 md:py-8 leading-relaxed">
            WobblyWork reduces procrastination and work worry.
          </h2>
          <p className={paragraphFormat}>
            A simple web app where users create tasks with just a click, then
            visualise all their work in a powerful, interactive mind-map.
          </p>

          <p className={subTitleFormat}>Who is WobblyWork built to help?</p>
          <ul className={ulFormat}>
            <li>Visual thinkers.</li>
            <li>Responsible for prioritising their work.</li>
            <li>
              Give themselves an A for quality, but a C for choosing what's
              next, resulting in procrastination, longer hours, and worry.
            </li>
          </ul>

          <p className={subTitleFormat}>Nothing has solved the problems</p>
          <p className={paragraphFormat}>You've tried many approaches.</p>
          <p className={paragraphFormat}>
            You write tasks in notebooks and scraps of paper, take pictures of
            whiteboard notes, or hope to remember them. You leave emails in your
            inbox, mark them flagged or unread, or set message reminders. You
            make lists in spreadsheets, docs, project management tools, or even
            todo-list apps.&nbsp;
          </p>
          <p className={paragraphFormat}>
            You're still left with the same problems:
          </p>
          <ul className={ulFormat}>
            <li>
              The irresistible smell of a <Emphasis>Freshly baked</Emphasis> new
              message or idea. It's more energising to solve someone's
              latest problem than grinding through work expected days ago, more fun to
              think about your new idea than the work required to
              deliver value from last month's brainwave.
            </li>
            <li>
              Without a trusted way of easily capturing tasks and keeping them
              visible, they become <Emphasis>Write Only Memory</Emphasis>, so easily forgotten
              when you're choosing what to work on today.
            </li>
            <li>
              Sometimes, you worry more about{" "}
              <Emphasis>tasks you remember, but procrastinate.</Emphasis>{" "}
              Usually the choice isn't whether to do them or not, because you do
              them, eventually. The choice is whether to first punish yourself
              with days or weeks of worry.
            </li>
            <li>
              Project management tools can help with complex projects, but are
              too inflexible to manage all the small, important tasks. So you{" "}
              <Emphasis>worry about the small stuff</Emphasis>.
            </li>
            {/* <li>
              <span className={inlineTitleFormat}>Don&rsquo;t look back.</span>{" "}
              Because tasks aren&rsquo;t effectively managed, you can't review
              how you did in the last week, so you don't feel your your work
              choices are improving over time.
            </li> */}
          </ul>
          <p className={subTitleFormat}>You bear the impact</p>
          <ul className="list-none list-inside">
            <li>
              <span className={inlineTitleFormat}>The weekend worrier.</span>{" "}
              You worry about work that hasn't got done, during evenings and the
              weekend. Imagine how more relaxing and enjoyable time would be,
              resting or with friends and family, if you trusted that your work
              systems help you do your best work.
            </li>
            <li>
              <span className={inlineTitleFormat}>The right stuff</span>.
              You&rsquo;re never going to make perfect choices about what to
              work on, but even improving a little could help you achieve more
              in your working hours, enabling a healthier work-life balance.
            </li>
          </ul>
          <p className={subTitleFormat}>How WobblyWork can help</p>
          <ul className="list-none list-inside">
            <li>
              <span className={inlineTitleFormat}>Beautiful views.</span> Rather
              than hiding tasks away in different tools, WobblyWork allows you
              to view everything, all the same time. Every single task in one
              single view. People find views beautiful. Looking down over a vast
              landscape brings us calm, and we believe the same of our global
              view, where you visualise everything, all at once, tamed. Then a
              couple of clicks shows you just the things you&rsquo;re working on
              today, or with a specific colleague, or for a particular
              project.&nbsp;
            </li>
            <li>
              <span className={inlineTitleFormat}>Click and connect.</span>{" "}
              We&rsquo;ve tried to make it as simple as possible to create
              tasks, connected to the context of other tasks, so it&rsquo;s
              easier to choose what to work on. Create a task - click.&nbsp;
              Assign someone the task -&nbsp; click. Hide the&nbsp; task until
              the right date - click. Completed it - click.
            </li>
            <li>
              <span className={inlineTitleFormat}>Divide and conquer.</span>{" "}
              WobblyWork is designed to manage the smallest task, to a larger
              project. Tasks are organised into trees, with unlimited depth.
              You&rsquo;re not constrained to tasks and sub-tasks, which allows
              you to always simplify getting something done, by breaking it
              down. If you get stuck with a task, and find yourself tempted to
              procrastinate, don&rsquo;t attempt to complete the task, just
              think how you can divide it into smaller chunks. Eventually
              you&rsquo;ll realise you&rsquo;ve got pieces that aren&rsquo;t so
              intimidating. Do one, and you&rsquo;re away.
            </li>
            <li>
              <span className={inlineTitleFormat}>The data of doing</span>.
              Because you&rsquo;ve captured all your tasks in WobblyWork, you
              have the data you need to analyse your day or week. How many tasks
              were done according to plan? How could you improve your discipline
              next time?
            </li>
          </ul>
          <p className={paragraphFormat}>
            WobblyWork will be free to try. Please register your interest in
            being an early tester, if you&rsquo;re kind enough to help us build
            the right tool for you.
          </p>

          <h3 className={subTitleFormat + " mt-8"}>Register Your Interest:</h3>
        </div>
      </div>
    </main>
  );
}
