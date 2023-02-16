interface ITags {
  id: string;
  tag?: string;
}

interface IToDo {
  id: string;
  content: string;
  category: "DOING" | "DONE" | "TODO";
  isFinish: boolean;
  tags?: ITags[];
}

interface IReadToDo {
  id?: string;
}

interface IUpdateToDo {
  id: string;
  tag?: ITags;
}

interface IDeleteToDo {
  id: string;
  tags?: ITags[];
}

let ToDo: IToDo[] = [];

/**
 * 할 일을 추가, 내용없이 추가 불가
 * @param todo todo 객체
 */
function createToDo(todo: IToDo) {
  ToDo.push(todo);
}

createToDo({
  id: "ee",
  content: "test",
  category: "DOING",
  isFinish: false,
});
createToDo({
  id: "e3",
  content: "test",
  category: "DOING",
  isFinish: false,
  tags: [
    { id: "1", tag: "toa" },
    { id: "2", tag: "toa2" },
  ],
});

/**
 * 모든 할 일을 조회
 * ID를 기반으로 특정 할 일을 조회
 * @param id 특정 할 일을 조회할 경우 id 입력
 */
function readToDo(id: IReadToDo) {
  if (!!id.id)
    return ToDo.filter((item) => item.id === id.id);
  else return ToDo;
}

/**
 * 특정 할 일의 특정 태그를 수정
 * @param {Id, tag} id: 수정할 ToDo의 id. tag : {id : 수정할 tag의 id, tag: 바꿀 tag 내용}
 */
function updateToDo({ id, tag }: IUpdateToDo) {
  if (!tag) {
    /**
     * @todo ID를 제외한 모든 속성을 수정 구현
     */
  } else {
    ToDo.filter((item) => item.id === id).map((item) => {
      return {
        ...item,
        tags: item.tags?.map((oneTag) => {
          if (oneTag.id === tag.id)
            return { id, tag: tag.tag };
          else return oneTag;
        }),
      };
    });
  }
}

/**
 * 특정 할 일을 삭제하거나 특정 태그 삭제, 모든 태그를 삭제
 * @param {Id, tag} id: 삭제할 ToDo의 id. tag : {id : 삭제할 tag의 id, tag: 바꿀 tag 내용}
 */
function deleteToDo({ id, tags }: IDeleteToDo) {
  if (!!id) {
    if (!tags)
      // ID를 기반으로 특정 할 일을 삭제
      ToDo = ToDo.filter((item) => item.id !== id);
    else if (tags && tags.length === 0)
      // 특정 할 일의 모든 태그를 제거
      ToDo = ToDo.filter((item) => item.id === id).map(
        (item) => {
          return { ...item, tags };
        }
      );
    else if (tags && tags.length > 0)
      // 특정 할 일의 특정 태그를 삭제
      ToDo = ToDo.filter((item) => item.id === id).map(
        (item) => {
          const inputTagIds = tags.map(
            (inputTag) => inputTag.id
          );
          const tobeTag = item.tags?.filter((tag) =>
            inputTagIds.some((id) => id !== tag.id)
          );
          return {
            ...item,
            tags: tobeTag,
          };
        }
      );
  }
}
