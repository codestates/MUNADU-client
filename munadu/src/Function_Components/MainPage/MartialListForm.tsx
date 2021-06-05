import { useEffect } from "react";
import {
  ContentCard,
  DetailTitle,
  DetailCaption,
} from "../../StyledComponents/recommendForm";
import martialJson from "../Common/martialData.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { filterMartial } from "../../Redux/Reducers/martialReducer";
import { useHistory } from "react-router";
import { selectTag } from "../../Redux/Reducers/tagReducer";
import {
  PageWrapper,
  ContentWrapper,
  FilterMenu,
  FilterGroup,
  DescRow,
  BoldText,
  NormalText,
  MartialWrapper,
  Box2,
} from "../../StyledComponents/martialListForm";

const MartialListForm = () => {
  const tagReducer = useSelector((state: RootState) => state.tagReducer);
  const {
    isHand,
    isWeapon,
    isHandAndWeapon,
    isDobok,
    isFreebok,
    isUniform,
    isAttack,
    isGround,
    isMMA,
    isEastern,
    isWestern,
    isSports,
    isNoSports,
    isCourtesy,
    isFreedom,
  } = tagReducer;

  const dispatch = useDispatch();
  const handleHand = async () => {
    if (isHand === false) {
      if (isWeapon) {
        // ? 기존 태그 취소 처리
        await dispatch(selectTag({ ...tagReducer, isWeapon: false }));
      }
      if (isHandAndWeapon) {
        await dispatch(selectTag({ ...tagReducer, isHandAndWeapon: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isWeapon: false,
          isHandAndWeapon: false,
          isHand: true,
        })
      );
    } else {
      // ? 새로운 태그 선택 처리
      dispatch(selectTag({ ...tagReducer, isHand: false }));
    }
  };
  const handleWeapon = async () => {
    if (isWeapon === false) {
      if (isHand) {
        await dispatch(selectTag({ ...tagReducer, isHand: false }));
      }
      if (isHandAndWeapon) {
        await dispatch(selectTag({ ...tagReducer, isHandAndWeapon: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isHand: false,
          isHandAndWeapon: false,
          isWeapon: true,
        })
      );
    } else {
      dispatch(selectTag({ ...tagReducer, isWeapon: false }));
    }
  };
  const handleHandAndWeapon = async () => {
    if (isHandAndWeapon === false) {
      if (isHand) {
        await dispatch(selectTag({ ...tagReducer, isHand: false }));
      }
      if (isWeapon) {
        await dispatch(selectTag({ ...tagReducer, isWeapon: false }));
      }
      // await setIsHandAndWeapon(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isHand: false,
          isWeapon: false,
          isHandAndWeapon: true,
        })
      );
    } else {
      dispatch(selectTag({ ...tagReducer, isHandAndWeapon: false }));
    }
  };
  const handleDobok = async () => {
    if (isDobok === false) {
      if (isFreebok) {
        await dispatch(selectTag({ ...tagReducer, isFreebok: false }));
      }
      if (isUniform) {
        await dispatch(selectTag({ ...tagReducer, isUniform: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isFreebok: false,
          isUniform: false,
          isDobok: true,
        })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isDobok: false }));
    }
  };
  const handleFreeBok = async () => {
    if (isFreebok === false) {
      if (isDobok) {
        await dispatch(selectTag({ ...tagReducer, isDobok: false }));
      }
      if (isUniform) {
        await dispatch(selectTag({ ...tagReducer, isUniform: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isDobok: false,
          isUniform: false,
          isFreebok: true,
        })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isFreebok: false }));
    }
  };
  const handleUniform = async () => {
    if (isUniform === false) {
      if (isDobok) {
        await dispatch(selectTag({ ...tagReducer, isDobok: false }));
      }
      if (isFreebok) {
        await dispatch(selectTag({ ...tagReducer, isFreebok: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isDobok: false,
          isFreebok: false,
          isUniform: true,
        })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isUniform: false }));
    }
  };
  const handleAttack = async () => {
    if (isAttack === false) {
      if (isGround) {
        await dispatch(selectTag({ ...tagReducer, isGround: false }));
      }
      if (isMMA) {
        await dispatch(selectTag({ ...tagReducer, isMMA: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isGround: false,
          isMMA: false,
          isAttack: true,
        })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isAttack: false }));
    }
  };
  const handleGround = async () => {
    if (isGround === false) {
      if (isAttack) {
        await dispatch(selectTag({ ...tagReducer, isAttack: false }));
      }
      if (isMMA) {
        await dispatch(selectTag({ ...tagReducer, isMMA: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isAttack: false,
          isMMA: false,
          isGround: true,
        })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isGround: false }));
    }
  };
  const handleMMA = async () => {
    if (isMMA === false) {
      if (isAttack) {
        await dispatch(selectTag({ ...tagReducer, isAttack: false }));
      }
      if (isGround) {
        await dispatch(selectTag({ ...tagReducer, isGround: false }));
      }

      await dispatch(
        selectTag({
          ...tagReducer,
          isAttack: false,
          isGround: false,
          isMMA: true,
        })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isMMA: false }));
    }
  };
  const handleEastern = async () => {
    if (isEastern === false) {
      if (isWestern) {
        await dispatch(selectTag({ ...tagReducer, isWestern: false }));
      }

      await dispatch(
        selectTag({ ...tagReducer, isWestern: false, isEastern: true })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isEastern: false }));
    }
  };
  const handleWestern = async () => {
    if (isWestern === false) {
      if (isEastern) {
        await dispatch(selectTag({ ...tagReducer, isEastern: false }));
      }

      await dispatch(
        selectTag({ ...tagReducer, isEastern: false, isWestern: true })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isWestern: false }));
    }
  };
  const handleSports = async () => {
    if (isSports === false) {
      if (isNoSports) {
        await dispatch(selectTag({ ...tagReducer, isNoSports: false }));
      }

      await dispatch(
        selectTag({ ...tagReducer, isNoSports: false, isSports: true })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isSports: false }));
    }
  };
  const handleNoSports = async () => {
    if (isNoSports === false) {
      if (isSports) {
        await dispatch(selectTag({ ...tagReducer, isSports: false }));
      }

      await dispatch(
        selectTag({ ...tagReducer, isSports: false, isNoSports: true })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isNoSports: false }));
    }
  };
  const handleCourtesy = async () => {
    if (isCourtesy === false) {
      if (isFreedom) {
        await dispatch(selectTag({ ...tagReducer, isFreedom: false }));
      }

      await dispatch(
        selectTag({ ...tagReducer, isFreedom: false, isCourtesy: true })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isCourtesy: false }));
    }
  };
  const handleFreedom = async () => {
    if (isFreedom === false) {
      if (isCourtesy) {
        await dispatch(selectTag({ ...tagReducer, isCourtesy: false }));
      }

      await dispatch(
        selectTag({ ...tagReducer, isCourtesy: false, isFreedom: true })
      );
    } else {
      await dispatch(selectTag({ ...tagReducer, isFreedom: false }));
    }
  };
  const martialData = useSelector((state: RootState) => state.martialReducer);
  useEffect(() => {
    let filterResult: any = [];
    if (isHand) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.weapon === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, weapon: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });

      dispatch(
        filterMartial({ ...martialData, weapon: 3, result: filterResult })
      );
    }
  }, [isHand]);
  useEffect(() => {
    let filterResult: any = [];
    if (isWeapon) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.weapon === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, weapon: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, weapon: 3, result: filterResult })
      );
    }
  }, [isWeapon]);
  useEffect(() => {
    let filterResult: any = [];
    if (isHandAndWeapon) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.weapon === 2)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, weapon: 2, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, weapon: 3, result: filterResult })
      );
    }
  }, [isHandAndWeapon]);
  useEffect(() => {
    let filterResult: any = [];
    if (isDobok) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.uniform === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, uniform: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, uniform: 3, result: filterResult })
      );
    }
  }, [isDobok]);
  useEffect(() => {
    let filterResult: any = [];
    if (isFreebok) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.uniform === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, uniform: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, uniform: 3, result: filterResult })
      );
    }
  }, [isFreebok]);
  useEffect(() => {
    let filterResult: any = [];
    if (isUniform) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.uniform === 2)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, uniform: 2, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, uniform: 3, result: filterResult })
      );
    }
  }, [isUniform]);
  useEffect(() => {
    let filterResult: any = [];
    if (isAttack) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.attack === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, attack: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, attack: 3, result: filterResult })
      );
    }
  }, [isAttack]);
  useEffect(() => {
    let filterResult: any = [];
    if (isGround) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.attack === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, attack: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, attack: 3, result: filterResult })
      );
    }
  }, [isGround]);
  useEffect(() => {
    let filterResult: any = [];
    if (isMMA) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.attack === 2)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, attack: 2, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, attack: 3, result: filterResult })
      );
    }
  }, [isMMA]);
  useEffect(() => {
    let filterResult: any = [];
    if (isEastern) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.origin === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, origin: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, origin: 2, result: filterResult })
      );
    }
  }, [isEastern]);
  useEffect(() => {
    let filterResult: any = [];
    if (isWestern) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.origin === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, origin: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, origin: 2, result: filterResult })
      );
    }
  }, [isWestern]);
  useEffect(() => {
    let filterResult: any = [];
    if (isSports) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.sports === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, sports: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, sports: 2, result: filterResult })
      );
    }
  }, [isSports]);
  useEffect(() => {
    let filterResult: any = [];
    if (isNoSports) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.sports === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, sports: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, sports: 2, result: filterResult })
      );
    }
  }, [isNoSports]);
  useEffect(() => {
    let filterResult: any = [];
    if (isCourtesy) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.manner === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, manner: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, manner: 2, result: filterResult })
      );
    }
  }, [isCourtesy]);
  useEffect(() => {
    let filterResult: any = [];
    if (isFreedom) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.manner === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, manner: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, manner: 2, result: filterResult })
      );
    }
  }, [isFreedom]);
  const history = useHistory();
  const moveToDetailPage = (id: number) => {
    history.push({
      pathname: "/detailpage",
      state: { martialId: id },
    });
  };
  return (
    <PageWrapper>
      <ContentWrapper>
        <FilterMenu>
          <FilterGroup>
            <DescRow>
              <BoldText>무기유무</BoldText>
              <NormalText idx={"q11"} onClick={handleHand} status={isHand}>
                맨손
              </NormalText>
              <NormalText idx={"q12"} onClick={handleWeapon} status={isWeapon}>
                무기
              </NormalText>
              <NormalText
                idx={"q13"}
                onClick={handleHandAndWeapon}
                status={isHandAndWeapon}
              >
                혼합
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>복장선호</BoldText>
              <NormalText idx={"q21"} onClick={handleDobok} status={isDobok}>
                도복
              </NormalText>
              <NormalText
                idx={"q22"}
                onClick={handleFreeBok}
                status={isFreebok}
              >
                자유복
              </NormalText>
              <NormalText
                idx={"q23"}
                onClick={handleUniform}
                status={isUniform}
              >
                유니폼
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>공격방식</BoldText>
              <NormalText idx={"q61"} onClick={handleAttack} status={isAttack}>
                타격
              </NormalText>
              <NormalText idx={"q62"} onClick={handleGround} status={isGround}>
                그라운드
              </NormalText>
              <NormalText idx={"q63"} onClick={handleMMA} status={isMMA}>
                종합
              </NormalText>
            </DescRow>
          </FilterGroup>
          <FilterGroup>
            <DescRow>
              <BoldText>기원국가</BoldText>
              <NormalText
                idx={"q31"}
                onClick={handleEastern}
                status={isEastern}
              >
                동양
              </NormalText>
              <NormalText
                idx={"q32"}
                onClick={handleWestern}
                status={isWestern}
              >
                서양
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>스포츠화</BoldText>
              <NormalText idx={"q41"} onClick={handleSports} status={isSports}>
                스포츠화 됨
              </NormalText>
              <NormalText
                idx={"q42"}
                onClick={handleNoSports}
                status={isNoSports}
              >
                스포츠화 안됨
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>예의강조</BoldText>
              <NormalText
                idx={"q51"}
                onClick={handleCourtesy}
                status={isCourtesy}
              >
                예의강조
              </NormalText>
              <NormalText
                idx={"q52"}
                onClick={handleFreedom}
                status={isFreedom}
              >
                자유로움
              </NormalText>
            </DescRow>
          </FilterGroup>
        </FilterMenu>
        <MartialWrapper>
          {martialData.result?.map((martial) => {
            return (
              <Box2>
                <ContentCard onClick={() => moveToDetailPage(martial.id)}>
                  <img src={martial.img} width="100%" height="100%" />
                </ContentCard>
                <DetailTitle>{martial.name}</DetailTitle>
                <DetailCaption>{martial.caption}</DetailCaption>
              </Box2>
            );
          })}
        </MartialWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MartialListForm;
