/**
 * This file was generated from ConfettiCannon.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue } from "mendix";

export interface ConfettiCannonProps<Style> {
    name: string;
    style: Style[];
    content?: ReactNode;
    active: DynamicValue<boolean>;
    confettiCount: number;
    timeout: number;
    untilStopped: boolean;
    duration: number;
    colors: string;
    size: number;
    bsize: number;
}

export interface ConfettiCannonPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    active: string;
    confettiCount: number | null;
    timeout: number | null;
    untilStopped: boolean;
    duration: number | null;
    colors: string;
    size: number | null;
    bsize: number | null;
}
