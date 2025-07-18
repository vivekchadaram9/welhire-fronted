import { useState } from 'react';
import QuestionBuilderHeader from './QuestionBuilderHeader';
import QuestionBuilderTabs from './QuestionBuilderTabs';
import DynamicQs from './DynamicQs';
import PreGeneratedAIQs from './PreGeneratedAIQs';
import ManualQs from './ManualQs';
 

export default function QuestionBuilder() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <QuestionBuilderHeader
        questionsSelected={3}
        estimatedTime={12}
      />
      <div className="flex flex-col items-center">
          <QuestionBuilderTabs value={tab} onChange={(_, v) => setTab(v)} />
      </div>
      {tab === 0 && <DynamicQs />}
      {tab === 1 && <PreGeneratedAIQs />}
      {tab === 2 && <ManualQs />}
    </div>
  );
}
