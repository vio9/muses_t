export type TextBlockProps = {
    title: string;  
    content: string; 
  };

  export type ExternalLinkComponent = {
    label: string;            
    url: string;               
    icon?:  string;    
    target?: string; 
  };

 export type VideoProps = {
    title: string;
    src: string;
    width?: string;
    height?: string;
  };
  