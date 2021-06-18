import { AppendDictionary, Dictionary } from './Utils';
import {
  EdgeSidebarData,
  HeaderConfigMap,
  InsetSidebarData,
  SubheaderData,
} from './Builder';
import { Breakpoint } from '@material-ui/system';

export type PersistentBehavior = 'fit' | 'flexible' | 'none';

export type DrawerAnchor = 'left' | 'right';

export type SidebarProperties = {
  anchor: DrawerAnchor;
};

export type FixedInsetSidebarConfig = {
  id?: string;
  anchor: DrawerAnchor;
  width: number | string;
  variant: 'fixed';
  headerMagnetEnabled?: boolean;
  hidden?: boolean;
};

export type AbsoluteInsetSidebarConfig = {
  id?: string;
  anchor: DrawerAnchor;
  width: number | string;
  variant: 'absolute';
  hidden?: boolean;
};

export type StickyInsetSidebarConfig = {
  id?: string;
  width: number | string;
  top: number | string;
  variant: 'sticky';
  hidden?: boolean;
};

export type InsetSidebarConfig =
  | FixedInsetSidebarConfig
  | AbsoluteInsetSidebarConfig
  | StickyInsetSidebarConfig;

export interface CollapsibleSidebarConfig {
  id: string;
  anchor?: DrawerAnchor;
  collapsible: boolean;
  collapsedWidth?: number | string;
  autoExpanded?: boolean;
  width: number | string;
  headerMagnetEnabled?: boolean;
  hidden?: boolean;
}

export interface PermanentSidebarConfig extends CollapsibleSidebarConfig {
  variant?: 'permanent';
}

export interface PersistentSidebarConfig extends CollapsibleSidebarConfig {
  persistentBehavior: AppendDictionary<PersistentBehavior>;
  variant: 'persistent';
}

export interface TemporarySidebarConfig {
  id: string;
  width: number | string;
  variant?: 'temporary';
  anchor?: DrawerAnchor;
  hidden?: boolean;
}

export type EdgeSidebarConfig =
  | PersistentSidebarConfig
  | PermanentSidebarConfig
  | TemporarySidebarConfig;

export type Position = 'relative' | 'sticky' | 'absolute' | 'fixed';

export interface HeaderConfig {
  id?: string;
  position: Position;
  top?: number | string;
  layer?: number;
  clipped?: AppendDictionary<boolean>;
  initialHeight?: number | string;
  hidden?: boolean;
}

export interface GlobalConfig {
  autoCollapse: Dictionary<false | Breakpoint>;
}

export interface LayoutData {
  global: GlobalConfig;
  edgeSidebar: Omit<EdgeSidebarData, 'ids'>;
  insetSidebar: InsetSidebarData;
  headerId: string;
  header: HeaderConfigMap;
  subheader: SubheaderData;
  content: { id: string };
  footer: { id: string };
}
