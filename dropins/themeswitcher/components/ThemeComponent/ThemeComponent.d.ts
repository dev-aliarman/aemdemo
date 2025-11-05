import { JSX, ComponentChildren } from 'preact';

export interface ThemeComponentProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    children?: ComponentChildren;
}
export declare const ThemeComponent: ({ className, children, ...props }: ThemeComponentProps) => JSX.Element;
//# sourceMappingURL=ThemeComponent.d.ts.map