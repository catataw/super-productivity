import { ProjectState } from '../../features/project/store/project.reducer';
import { TaskState } from '../../features/tasks/store/task.reducer';
import { GlobalConfig } from '../../features/config/config.model';
import { EntityState } from '@ngrx/entity';
import { Task } from '../../features/tasks/task.model';
import { IssueStateMap } from '../../features/issue/issue';
import { BookmarkState } from '../../features/bookmark/store/bookmark.reducer';
import { NoteState } from '../../features/note/store/note.reducer';


// NOTE: [key:string] always refers to projectId
export interface AppDataComplete {
  lastActiveTime: string;
  project: ProjectState;
  globalConfig: GlobalConfig;
  note?: {
    [key: string]: NoteState;
  };
  bookmark?: {
    [key: string]: BookmarkState;
  };
  task?: {
    [key: string]: TaskState;
  };
  taskArchive?: {
    [key: string]: EntityState<Task>;
  };
  taskAttachment?: {
    [key: string]: EntityState<Task>;
  };
  issue?: {
    [key: string]: IssueStateMap;
  };
}
