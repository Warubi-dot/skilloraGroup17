let selectedModule: any = null;

export const setModule = (module: any) => {
  selectedModule = module;
};

export const getModule = () => {
  return selectedModule;
};