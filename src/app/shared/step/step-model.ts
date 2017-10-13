export class StepObj {
    id: string;
    title: string;
    icon?:string;
    data?:any
  }
  
  
  export class StepData {
    rows: Array<StepObj>;
    currentIndex: number
  }

  export class StepType{
    public static PRIMARY: string = "primary";
    public static SUCCESS: string = "success";
    public static DANGER: string = "danger";
    public static WARNING: string = "warning";
    public static INFO: string = "info";
    public static DARK: string = "dark";
    public static SECONDARY: string = "secondary";
  }