export type Answer = {
	metadata: Metadata;
	signalingType: "Answer";
	sender?: string;
	target: string;
	content: {
		sdp: string;
	};
};

export type Client = {
	id: string;
	address: string;
	properties?: Object;
};

export type ClientEnter = {
	metadata: Metadata;
	signalingType: "ClientEnter";
	content: {
		client: Client;
	};
};

export type ClientEntered = {
	metadata: Metadata;
	signalingType: "ClientEntered";
	content: {
		self: Client;
	};
};

export type ClientExit = {
	metadata: Metadata;
	signalingType: "ClientExit";
	content: {
		client: Client;
	};
};

export type Clients = {
	metadata: Metadata;
	signalingType: "Clients";
	content: {
		clients: Client[];
	};
};

export type Ice = {
	metadata: Metadata;
	signalingType: "Ice";
	sender?: string;
	target: string;
	content: {
		sdpCandidate: string;
		sdpMLineIndex: number;
		sdpMid: string;
	};
};

export type Message = {
	metadata: Metadata;
	signalingType: string;
	sender?: string;
	target?: string;
	content?: Object;
};

export type Metadata = {
	apiVersion: string;
	compVersion: string;
	compOrigin: string;
	projectName: string;
};

export type Offer = {
	metadata: Metadata;
	signalingType: "Offer";
	sender?: string;
	target: string;
	content: {
		sdp: string;
	};
};
