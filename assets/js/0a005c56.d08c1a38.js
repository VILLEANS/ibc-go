"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1153],{88214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var a=n(85893),i=n(11151);const s={title:"Define packets and acks",sidebar_label:"Define packets and acks",sidebar_position:5,slug:"/ibc/apps/packets_acks"},o="Define packets and acks",c={id:"ibc/apps/packets_acks",title:"Define packets and acks",description:"Learn how to define custom packet and acknowledgement structs and how to encode and decode them.",source:"@site/versioned_docs/version-v7.3.x/01-ibc/03-apps/05-packets_acks.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/packets_acks",permalink:"/v7/ibc/apps/packets_acks",draft:!1,unlisted:!1,tags:[],version:"v7.3.x",sidebarPosition:5,frontMatter:{title:"Define packets and acks",sidebar_label:"Define packets and acks",sidebar_position:5,slug:"/ibc/apps/packets_acks"},sidebar:"defaultSidebar",previous:{title:"Keeper",permalink:"/v7/ibc/apps/keeper"},next:{title:"Routing",permalink:"/v7/ibc/apps/routing"}},d={},r=[{value:"Pre-requisites Readings",id:"pre-requisites-readings",level:2},{value:"Custom packets",id:"custom-packets",level:2},{value:"Optional interfaces",id:"optional-interfaces",level:3},{value:"PacketData interface",id:"packetdata-interface",level:4},{value:"PacketDataProvider interface",id:"packetdataprovider-interface",level:4},{value:"Acknowledgements",id:"acknowledgements",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"define-packets-and-acks",children:"Define packets and acks"}),"\n",(0,a.jsx)(t.admonition,{title:"Synopsis",type:"note",children:(0,a.jsx)(t.p,{children:"Learn how to define custom packet and acknowledgement structs and how to encode and decode them."})}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.h2,{id:"pre-requisites-readings",children:"Pre-requisites Readings"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/v7/ibc/overview",children:"IBC Overview"}),")"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/v7/ibc/integration",children:"IBC default integration"})}),"\n"]})]}),"\n",(0,a.jsx)(t.h2,{id:"custom-packets",children:"Custom packets"}),"\n",(0,a.jsxs)(t.p,{children:["Modules connected by a channel must agree on what application data they are sending over the\nchannel, as well as how they will encode/decode it. This process is not specified by IBC as it is up\nto each application module to determine how to implement this agreement. However, for most\napplications this will happen as a version negotiation during the channel handshake. While more\ncomplex version negotiation is possible to implement inside the channel opening handshake, a very\nsimple version negotiation is implemented in the ",(0,a.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/transfer/module.go",children:"ibc-transfer module"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Thus, a module must define its custom packet data structure, along with a well-defined way to\nencode and decode it to and from ",(0,a.jsx)(t.code,{children:"[]byte"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"// Custom packet data defined in application module\ntype CustomPacketData struct {\n    // Custom fields ...\n}\n\nEncodePacketData(packetData CustomPacketData) []byte {\n    // encode packetData to bytes\n}\n\nDecodePacketData(encoded []byte) (CustomPacketData) {\n    // decode from bytes to packet data\n}\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note that the ",(0,a.jsx)(t.code,{children:"CustomPacketData"})," struct is defined in the proto definition and then compiled by the protobuf compiler."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Then a module must encode its packet data before sending it through IBC."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"// retrieve the dynamic capability for this channel\nchannelCap := scopedKeeper.GetCapability(ctx, channelCapName)\n// Sending custom application packet data\ndata := EncodePacketData(customPacketData)\n// Send packet to IBC, authenticating with channelCap\nsequence, err := IBCChannelKeeper.SendPacket(\n    ctx, \n    channelCap, \n    sourcePort, \n    sourceChannel, \n    timeoutHeight, \n    timeoutTimestamp, \n    data,\n)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["A module receiving a packet must decode the ",(0,a.jsx)(t.code,{children:"PacketData"})," into a structure it expects so that it can\nact on it."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"// Receiving custom application packet data (in OnRecvPacket)\npacketData := DecodePacketData(packet.Data)\n// handle received custom packet data\n"})}),"\n",(0,a.jsx)(t.h3,{id:"optional-interfaces",children:"Optional interfaces"}),"\n",(0,a.jsx)(t.p,{children:"The following interfaces are optional and MAY be implemented by a custom packet type.\nThey allow middlewares such as callbacks to access information stored within the packet data."}),"\n",(0,a.jsx)(t.h4,{id:"packetdata-interface",children:"PacketData interface"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"PacketData"})," interface is defined as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"// PacketData defines an optional interface which an application's packet data structure may implement.\ntype PacketData interface {\n\t// GetPacketSender returns the sender address of the packet data.\n\t// If the packet sender is unknown or undefined, an empty string should be returned.\n\tGetPacketSender(sourcePortID string) string\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The implementation of ",(0,a.jsx)(t.code,{children:"GetPacketSender"})," should return the sender of the packet data.\nIf the packet sender is unknown or undefined, an empty string should be returned."]}),"\n",(0,a.jsx)(t.p,{children:"This interface is intended to give IBC middlewares access to the packet sender of a packet data type."}),"\n",(0,a.jsx)(t.h4,{id:"packetdataprovider-interface",children:"PacketDataProvider interface"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"PacketDataProvider"})," interface is defined as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"// PacketDataProvider defines an optional interfaces for retrieving custom packet data stored on behalf of another application.\n// An existing problem in the IBC middleware design is the inability for a middleware to define its own packet data type and insert packet sender provided information.\n// A short term solution was introduced into several application's packet data to utilize a memo field to carry this information on behalf of another application.\n// This interfaces standardizes that behaviour. Upon realization of the ability for middleware's to define their own packet data types, this interface will be deprecated and removed with time.\ntype PacketDataProvider interface {\n\t// GetCustomPacketData returns the packet data held on behalf of another application.\n\t// The name the information is stored under should be provided as the key.\n\t// If no custom packet data exists for the key, nil should be returned.\n\tGetCustomPacketData(key string) interface{}\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The implementation of ",(0,a.jsx)(t.code,{children:"GetCustomPacketData"})," should return packet data held on behalf of another application (if present and supported).\nIf this functionality is not supported, it should return nil. Otherwise it should return the packet data associated with the provided key."]}),"\n",(0,a.jsx)(t.p,{children:"This interface gives IBC applications access to the packet data information embedded into the base packet data type.\nWithin transfer and interchain accounts, the embedded packet data is stored within the Memo field."}),"\n",(0,a.jsx)(t.p,{children:"Once all IBC applications within an IBC stack are capable of creating/maintaining their own packet data type's, this interface function will be deprecated and removed."}),"\n",(0,a.jsx)(t.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,a.jsx)(t.p,{children:"Modules may commit an acknowledgement upon receiving and processing a packet in the case of synchronous packet processing.\nIn the case where a packet is processed at some later point after the packet has been received (asynchronous execution), the acknowledgement\nwill be written once the packet has been processed by the application which may be well after the packet receipt."}),"\n",(0,a.jsx)(t.p,{children:"NOTE: Most blockchain modules will want to use the synchronous execution model in which the module processes and writes the acknowledgement\nfor a packet as soon as it has been received from the IBC module."}),"\n",(0,a.jsx)(t.p,{children:"This acknowledgement can then be relayed back to the original sender chain, which can take action\ndepending on the contents of the acknowledgement."}),"\n",(0,a.jsx)(t.p,{children:"Just as packet data was opaque to IBC, acknowledgements are similarly opaque. Modules must pass and\nreceive acknowledegments with the IBC modules as byte strings."}),"\n",(0,a.jsxs)(t.p,{children:["Thus, modules must agree on how to encode/decode acknowledgements. The process of creating an\nacknowledgement struct along with encoding and decoding it, is very similar to the packet data\nexample above. ",(0,a.jsx)(t.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope",children:"ICS 04"}),"\nspecifies a recommended format for acknowledgements. This acknowledgement type can be imported from\n",(0,a.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/04-channel/types",children:"channel types"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["While modules may choose arbitrary acknowledgement structs, a default acknowledgement types is provided by IBC ",(0,a.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/main/proto/ibc/core/channel/v1/channel.proto",children:"here"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-protobuf",children:"// Acknowledgement is the recommended acknowledgement format to be used by\n// app-specific protocols.\n// NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental\n// conflicts with other protobuf message formats used for acknowledgements.\n// The first byte of any message with this format will be the non-ASCII values\n// `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:\n// https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope\nmessage Acknowledgement {\n  // response contains either a result or an error and must be non-empty\n  oneof response {\n    bytes  result = 21;\n    string error  = 22;\n  }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var a=n(67294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);