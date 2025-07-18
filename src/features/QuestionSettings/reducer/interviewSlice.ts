// src/store/interviewSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  JdSkills,
  QuickQuestionSettings,
  QuestionSettingsCounts,
  InterviewQuestion
} from '../../../types/interview/interview.type';

interface InterviewState {
  jdSkills:           JdSkills | null;
  quickSettings:      QuickQuestionSettings | null;
  questionSettings:   QuestionSettingsCounts;
  defaultQuestions :    InterviewQuestion[]
}

const initialState: InterviewState = {
  jdSkills:      null,
  quickSettings: null,
  questionSettings: {
    noOfTechnicalSkillQuestions: 0,
    noOfSoftSkillQuestions:      0,
    noOfBehavioralQuestions:     0,
  },
  defaultQuestions:[]
};

const interviewSlice = createSlice({
  name: 'interview',
  initialState,
  reducers: {
    /* JD skills */
    setJdSkills(state, action: PayloadAction<JdSkills>) {
      state.jdSkills = action.payload;
    },
    clearJdSkills(state) {
      state.jdSkills = null;
    },

    /* Quick question settings */
    setQuickSettings(state, action: PayloadAction<QuickQuestionSettings>) {
      state.quickSettings = action.payload;
    },
    clearQuickSettings(state) {
      state.quickSettings = null;
    },


    // question counts
    setQuestionSettings(
      state,
      action: PayloadAction<QuestionSettingsCounts>
    ) {
      state.questionSettings = action.payload;
    },

    updateQuestionSettings(
      state,
      action: PayloadAction<Partial<QuestionSettingsCounts>>
    ) {
      state.questionSettings = {
        ...state.questionSettings,
        ...action.payload
      };
    },


    //Default questions
   setDefaultQuestions(
      state,
      action: PayloadAction<InterviewQuestion[]>
    ) {
      state.defaultQuestions = action.payload;
    },

    clearDefaultQuestions(state) {
      state.defaultQuestions = [];
    },

    /* Clear all interview data */
    clearAll(state) {
      state.jdSkills           = null;
      state.quickSettings      = null;
      state.questionSettings   = {
        noOfTechnicalSkillQuestions: 0,
        noOfSoftSkillQuestions:      0,
        noOfBehavioralQuestions:     0
      };
      state.defaultQuestions = []; 
    },
  }
});

export const {
  setJdSkills,
  clearJdSkills,
  setQuickSettings,
  clearQuickSettings,
  setQuestionSettings,
  updateQuestionSettings,
  setDefaultQuestions,     
  clearDefaultQuestions,   
  clearAll,
} = interviewSlice.actions;

/** Selectors */
export const selectJdSkills = (state: { interview: InterviewState }) =>
  state.interview.jdSkills;

export const selectQuickSettings = (state: { interview: InterviewState }) =>
  state.interview.quickSettings;

export const selectQuestionSettings = (state: { interview: InterviewState }) =>
  state.interview.questionSettings;

export const selectDefaultQuestions = (state: { interview: InterviewState }) =>
  state.interview.defaultQuestions;

export default interviewSlice.reducer;
