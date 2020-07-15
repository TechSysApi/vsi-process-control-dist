abstract class Path {
    abstract path(): String
    url(base?: string): String {
        return (base ? base : VSIProcessControlPaths.baseUrl) + this.path();
    }
}

class Client {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "client"; }
    readonly status = new ClientStatus(this);
}

class ClientStatus {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "status"; }
    srcSystem(srcSystem?: string){ return new ClientStatusSrcSystem(this, srcSystem); }
}

class ClientStatusSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new ClientStatusSrcSystemSrcInstance(this, srcInstance); }
}

class ClientStatusSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class Control {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "control"; }
    readonly parameterValuesSet = new ControlParameterValuesSet(this);
    readonly stateSet = new ControlStateSet(this);
}

class ControlParameterValuesSet {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "parameter-values:set"; }
    srcSystem(srcSystem?: string){ return new ControlParameterValuesSetSrcSystem(this, srcSystem); }
}

class ControlParameterValuesSetSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new ControlParameterValuesSetSrcSystemSrcInstance(this, srcInstance); }
}

class ControlParameterValuesSetSrcSystemSrcInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
    dstSystem(dstSystem?: string){ return new ControlParameterValuesSetSrcSystemSrcInstanceDstSystem(this, dstSystem); }
}

class ControlParameterValuesSetSrcSystemSrcInstanceDstSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstSystem}"); }
    dstInstance(dstInstance?: string){ return new ControlParameterValuesSetSrcSystemSrcInstanceDstSystemDstInstance(this, dstInstance); }
}

class ControlParameterValuesSetSrcSystemSrcInstanceDstSystemDstInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstInstance}"); }
    conversationId(conversationId?: string){ return new ControlParameterValuesSetSrcSystemSrcInstanceDstSystemDstInstanceConversationId(this, conversationId); }
}

class ControlParameterValuesSetSrcSystemSrcInstanceDstSystemDstInstanceConversationId extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{conversationId}"); }
}

class ControlStateSet {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "state:set"; }
    srcSystem(srcSystem?: string){ return new ControlStateSetSrcSystem(this, srcSystem); }
}

class ControlStateSetSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new ControlStateSetSrcSystemSrcInstance(this, srcInstance); }
}

class ControlStateSetSrcSystemSrcInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
    dstSystem(dstSystem?: string){ return new ControlStateSetSrcSystemSrcInstanceDstSystem(this, dstSystem); }
}

class ControlStateSetSrcSystemSrcInstanceDstSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstSystem}"); }
    dstInstance(dstInstance?: string){ return new ControlStateSetSrcSystemSrcInstanceDstSystemDstInstance(this, dstInstance); }
}

class ControlStateSetSrcSystemSrcInstanceDstSystemDstInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstInstance}"); }
    conversationId(conversationId?: string){ return new ControlStateSetSrcSystemSrcInstanceDstSystemDstInstanceConversationId(this, conversationId); }
}

class ControlStateSetSrcSystemSrcInstanceDstSystemDstInstanceConversationId extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{conversationId}"); }
}

class Device {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "device"; }
    readonly fillLevels = new DeviceFillLevels(this);
    readonly messages = new DeviceMessages(this);
    readonly parameterMetadata = new DeviceParameterMetadata(this);
    readonly parameterValues = new DeviceParameterValues(this);
    readonly parameterValuesSetStatus = new DeviceParameterValuesSetStatus(this);
    readonly readRates = new DeviceReadRates(this);
    readonly state = new DeviceState(this);
    readonly stateSetStatus = new DeviceStateSetStatus(this);
    readonly statistics = new DeviceStatistics(this);
    readonly trackEvents = new DeviceTrackEvents(this);
}

class DeviceFillLevels {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "fill-levels"; }
    srcSystem(srcSystem?: string){ return new DeviceFillLevelsSrcSystem(this, srcSystem); }
}

class DeviceFillLevelsSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceFillLevelsSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceFillLevelsSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class DeviceMessages {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "messages"; }
    srcSystem(srcSystem?: string){ return new DeviceMessagesSrcSystem(this, srcSystem); }
}

class DeviceMessagesSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceMessagesSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceMessagesSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class DeviceParameterMetadata {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "parameter-metadata"; }
    srcSystem(srcSystem?: string){ return new DeviceParameterMetadataSrcSystem(this, srcSystem); }
}

class DeviceParameterMetadataSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceParameterMetadataSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceParameterMetadataSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class DeviceParameterValues {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "parameter-values"; }
    srcSystem(srcSystem?: string){ return new DeviceParameterValuesSrcSystem(this, srcSystem); }
}

class DeviceParameterValuesSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceParameterValuesSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceParameterValuesSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class DeviceParameterValuesSetStatus {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "parameter-values:set:status"; }
    srcSystem(srcSystem?: string){ return new DeviceParameterValuesSetStatusSrcSystem(this, srcSystem); }
}

class DeviceParameterValuesSetStatusSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceParameterValuesSetStatusSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceParameterValuesSetStatusSrcSystemSrcInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
    dstSystem(dstSystem?: string){ return new DeviceParameterValuesSetStatusSrcSystemSrcInstanceDstSystem(this, dstSystem); }
}

class DeviceParameterValuesSetStatusSrcSystemSrcInstanceDstSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstSystem}"); }
    dstInstance(dstInstance?: string){ return new DeviceParameterValuesSetStatusSrcSystemSrcInstanceDstSystemDstInstance(this, dstInstance); }
}

class DeviceParameterValuesSetStatusSrcSystemSrcInstanceDstSystemDstInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstInstance}"); }
    conversationId(conversationId?: string){ return new DeviceParameterValuesSetStatusSrcSystemSrcInstanceDstSystemDstInstanceConversationId(this, conversationId); }
}

class DeviceParameterValuesSetStatusSrcSystemSrcInstanceDstSystemDstInstanceConversationId extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{conversationId}"); }
}

class DeviceReadRates {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "read-rates"; }
    srcSystem(srcSystem?: string){ return new DeviceReadRatesSrcSystem(this, srcSystem); }
}

class DeviceReadRatesSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceReadRatesSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceReadRatesSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class DeviceState {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "state"; }
    srcSystem(srcSystem?: string){ return new DeviceStateSrcSystem(this, srcSystem); }
}

class DeviceStateSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceStateSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceStateSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class DeviceStateSetStatus {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "state:set:status"; }
    srcSystem(srcSystem?: string){ return new DeviceStateSetStatusSrcSystem(this, srcSystem); }
}

class DeviceStateSetStatusSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceStateSetStatusSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceStateSetStatusSrcSystemSrcInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
    dstSystem(dstSystem?: string){ return new DeviceStateSetStatusSrcSystemSrcInstanceDstSystem(this, dstSystem); }
}

class DeviceStateSetStatusSrcSystemSrcInstanceDstSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstSystem}"); }
    dstInstance(dstInstance?: string){ return new DeviceStateSetStatusSrcSystemSrcInstanceDstSystemDstInstance(this, dstInstance); }
}

class DeviceStateSetStatusSrcSystemSrcInstanceDstSystemDstInstance {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{dstInstance}"); }
    conversationId(conversationId?: string){ return new DeviceStateSetStatusSrcSystemSrcInstanceDstSystemDstInstanceConversationId(this, conversationId); }
}

class DeviceStateSetStatusSrcSystemSrcInstanceDstSystemDstInstanceConversationId extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{conversationId}"); }
}

class DeviceStatistics {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "statistics"; }
    srcSystem(srcSystem?: string){ return new DeviceStatisticsSrcSystem(this, srcSystem); }
}

class DeviceStatisticsSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceStatisticsSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceStatisticsSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class DeviceTrackEvents {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "track-events"; }
    srcSystem(srcSystem?: string){ return new DeviceTrackEventsSrcSystem(this, srcSystem); }
}

class DeviceTrackEventsSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new DeviceTrackEventsSrcSystemSrcInstance(this, srcInstance); }
}

class DeviceTrackEventsSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

export default class VSIProcessControlPaths {
    private constructor(){}
    static readonly baseUrl = "server:1883mqtt";
    static readonly basePath = "/vsi-process-control/v1";
    private path() { return VSIProcessControlPaths.basePath; }
    static readonly client = new Client(new VSIProcessControlPaths());
    static readonly control = new Control(new VSIProcessControlPaths());
    static readonly device = new Device(new VSIProcessControlPaths());
}

