import { $Serializable, $InputStream, $OutputStream, $Closeable } from "@package/java/io";
import { $Stream } from "@package/java/util/stream";
import { $Permission } from "@package/java/security";
import { $Enumeration, $List, $Map, $Set } from "@package/java/util";
import { $Enum, $Comparable, $Object, $Class } from "@package/java/lang";
import { $DatagramChannel, $SocketChannel, $ServerSocketChannel } from "@package/java/nio/channels";
export * as http from "@package/java/net/http";

declare module "@package/java/net" {
    export class $ServerSocket implements $Closeable {
        getLocalSocketAddress(): $SocketAddress;
        getReuseAddress(): boolean;
        /**
         * @deprecated
         */
        static setSocketFactory(arg0: $SocketImplFactory_): void;
        bind(arg0: $SocketAddress, arg1: number): void;
        bind(arg0: $SocketAddress): void;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        getLocalPort(): number;
        supportedOptions(): $Set<$SocketOption<never>>;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $ServerSocket;
        getOption<T>(arg0: $SocketOption<T>): T;
        getChannel(): $ServerSocketChannel;
        isClosed(): boolean;
        setReuseAddress(arg0: boolean): void;
        setReceiveBufferSize(arg0: number): void;
        setSoTimeout(arg0: number): void;
        getReceiveBufferSize(): number;
        getSoTimeout(): number;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        accept(): $Socket;
        close(): void;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: $InetAddress);
        constructor();
        constructor(arg0: number, arg1: number);
        get localSocketAddress(): $SocketAddress;
        static set socketFactory(value: $SocketImplFactory_);
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        get localPort(): number;
        get channel(): $ServerSocketChannel;
        get closed(): boolean;
    }
    export class $NetworkInterface {
        getDisplayName(): string;
        getInterfaceAddresses(): $List<$InterfaceAddress>;
        getSubInterfaces(): $Enumeration<$NetworkInterface>;
        subInterfaces(): $Stream<$NetworkInterface>;
        static getByIndex(arg0: number): $NetworkInterface;
        isPointToPoint(): boolean;
        supportsMulticast(): boolean;
        getMTU(): number;
        static getByName(arg0: string): $NetworkInterface;
        getIndex(): number;
        static networkInterfaces(): $Stream<$NetworkInterface>;
        inetAddresses(): $Stream<$InetAddress>;
        isLoopback(): boolean;
        isUp(): boolean;
        static getNetworkInterfaces(): $Enumeration<$NetworkInterface>;
        getInetAddresses(): $Enumeration<$InetAddress>;
        static getByInetAddress(arg0: $InetAddress): $NetworkInterface;
        getHardwareAddress(): number[];
        getName(): string;
        isVirtual(): boolean;
        getParent(): $NetworkInterface;
        get displayName(): string;
        get interfaceAddresses(): $List<$InterfaceAddress>;
        get pointToPoint(): boolean;
        get MTU(): number;
        get index(): number;
        get loopback(): boolean;
        get up(): boolean;
        get hardwareAddress(): number[];
        get name(): string;
        get virtual(): boolean;
        get parent(): $NetworkInterface;
    }
    export class $URLStreamHandlerFactory {
    }
    export interface $URLStreamHandlerFactory {
        createURLStreamHandler(arg0: string): $URLStreamHandler;
    }
    /**
     * Values that may be interpreted as {@link $URLStreamHandlerFactory}.
     */
    export type $URLStreamHandlerFactory_ = ((arg0: string) => $URLStreamHandler);
    export class $InterfaceAddress {
        getBroadcast(): $InetAddress;
        getNetworkPrefixLength(): number;
        getAddress(): $InetAddress;
        get broadcast(): $InetAddress;
        get networkPrefixLength(): number;
        get address(): $InetAddress;
    }
    export class $SocketImplFactory {
    }
    export interface $SocketImplFactory {
        createSocketImpl(): $SocketImpl;
    }
    /**
     * Values that may be interpreted as {@link $SocketImplFactory}.
     */
    export type $SocketImplFactory_ = (() => $SocketImpl);
    export class $URI implements $Comparable<$URI>, $Serializable {
        getRawSchemeSpecificPart(): string;
        parseServerAuthority(): $URI;
        getSchemeSpecificPart(): string;
        getRawUserInfo(): string;
        getFragment(): string;
        toASCIIString(): string;
        static create(arg0: string): $URI;
        getAuthority(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURL(): $URL;
        getScheme(): string;
        isOpaque(): boolean;
        getRawAuthority(): string;
        getRawFragment(): string;
        getRawQuery(): string;
        getRawPath(): string;
        getHost(): string;
        getPort(): number;
        normalize(): $URI;
        relativize(arg0: $URI): $URI;
        compareTo(arg0: $URI): number;
        isAbsolute(): boolean;
        resolve(arg0: string): $URI;
        resolve(arg0: $URI): $URI;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string);
        constructor(arg0: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        constructor(arg0: string, arg1: string, arg2: string);
        get rawSchemeSpecificPart(): string;
        get schemeSpecificPart(): string;
        get rawUserInfo(): string;
        get fragment(): string;
        get authority(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        get scheme(): string;
        get opaque(): boolean;
        get rawAuthority(): string;
        get rawFragment(): string;
        get rawQuery(): string;
        get rawPath(): string;
        get host(): string;
        get port(): number;
        get absolute(): boolean;
    }
    export class $URL implements $Serializable {
        getContent(arg0: $Class<never>[]): $Object;
        getContent(): $Object;
        getProtocol(): string;
        getAuthority(): string;
        getFile(): string;
        getRef(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURI(): $URI;
        static setURLStreamHandlerFactory(arg0: $URLStreamHandlerFactory_): void;
        getHost(): string;
        getPort(): number;
        getDefaultPort(): number;
        sameFile(arg0: $URL): boolean;
        toExternalForm(): string;
        openConnection(arg0: $Proxy): $URLConnection;
        openConnection(): $URLConnection;
        static of(arg0: $URI, arg1: $URLStreamHandler): $URL;
        openStream(): $InputStream;
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string, arg2: $URLStreamHandler);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: $URLStreamHandler);
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: string);
        get protocol(): string;
        get authority(): string;
        get file(): string;
        get ref(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        static set URLStreamHandlerFactory(value: $URLStreamHandlerFactory_);
        get host(): string;
        get port(): number;
        get defaultPort(): number;
    }
    export class $SocketImpl implements $SocketOptions {
        constructor();
    }
    export class $Proxy {
        address(): $SocketAddress;
        type(): $Proxy$Type;
        static NO_PROXY: $Proxy;
        constructor(arg0: $Proxy$Type_, arg1: $SocketAddress);
    }
    export class $DatagramSocket implements $Closeable {
        setBroadcast(arg0: boolean): void;
        /**
         * @deprecated
         */
        static setDatagramSocketImplFactory(arg0: $DatagramSocketImplFactory_): void;
        joinGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        getReuseAddress(): boolean;
        bind(arg0: $SocketAddress): void;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        getLocalPort(): number;
        receive(arg0: $DatagramPacket): void;
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $DatagramSocket;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        getBroadcast(): boolean;
        leaveGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        getPort(): number;
        getChannel(): $DatagramChannel;
        disconnect(): void;
        isClosed(): boolean;
        send(arg0: $DatagramPacket): void;
        setReuseAddress(arg0: boolean): void;
        setReceiveBufferSize(arg0: number): void;
        setSoTimeout(arg0: number): void;
        setTrafficClass(arg0: number): void;
        getReceiveBufferSize(): number;
        getSendBufferSize(): number;
        getSoTimeout(): number;
        getTrafficClass(): number;
        setSendBufferSize(arg0: number): void;
        connect(arg0: $InetAddress, arg1: number): void;
        connect(arg0: $SocketAddress): void;
        close(): void;
        constructor(arg0: $SocketAddress);
        constructor(arg0: number);
        constructor();
        constructor(arg0: number, arg1: $InetAddress);
        static set datagramSocketImplFactory(value: $DatagramSocketImplFactory_);
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        get localPort(): number;
        get connected(): boolean;
        get localAddress(): $InetAddress;
        get port(): number;
        get channel(): $DatagramChannel;
        get closed(): boolean;
    }
    export class $InetAddress implements $Serializable {
        isReachable(arg0: number): boolean;
        isReachable(arg0: $NetworkInterface, arg1: number, arg2: number): boolean;
        static getAllByName(arg0: string): $InetAddress[];
        static getByAddress(arg0: number[]): $InetAddress;
        static getByAddress(arg0: string, arg1: number[]): $InetAddress;
        isMulticastAddress(): boolean;
        isAnyLocalAddress(): boolean;
        isLoopbackAddress(): boolean;
        isSiteLocalAddress(): boolean;
        isMCGlobal(): boolean;
        isMCNodeLocal(): boolean;
        isMCLinkLocal(): boolean;
        isMCSiteLocal(): boolean;
        isMCOrgLocal(): boolean;
        getCanonicalHostName(): string;
        static getLoopbackAddress(): $InetAddress;
        static getLocalHost(): $InetAddress;
        getAddress(): number[];
        getHostName(): string;
        static getByName(arg0: string): $InetAddress;
        isLinkLocalAddress(): boolean;
        getHostAddress(): string;
        get multicastAddress(): boolean;
        get anyLocalAddress(): boolean;
        get siteLocalAddress(): boolean;
        get MCGlobal(): boolean;
        get MCNodeLocal(): boolean;
        get MCLinkLocal(): boolean;
        get MCSiteLocal(): boolean;
        get MCOrgLocal(): boolean;
        get canonicalHostName(): string;
        static get localHost(): $InetAddress;
        get address(): number[];
        get hostName(): string;
        get linkLocalAddress(): boolean;
        get hostAddress(): string;
    }
    export class $FileNameMap {
    }
    export interface $FileNameMap {
        getContentTypeFor(arg0: string): string;
    }
    /**
     * Values that may be interpreted as {@link $FileNameMap}.
     */
    export type $FileNameMap_ = ((arg0: string) => string);
    export class $ContentHandlerFactory {
    }
    export interface $ContentHandlerFactory {
        createContentHandler(arg0: string): $ContentHandler;
    }
    /**
     * Values that may be interpreted as {@link $ContentHandlerFactory}.
     */
    export type $ContentHandlerFactory_ = ((arg0: string) => $ContentHandler);
    export class $URLConnection {
        getUseCaches(): boolean;
        getContentLengthLong(): number;
        static guessContentTypeFromStream(arg0: $InputStream): string;
        static guessContentTypeFromName(arg0: string): string;
        getHeaderField(arg0: string): string;
        getHeaderField(arg0: number): string;
        getRequestProperty(arg0: string): string;
        addRequestProperty(arg0: string, arg1: string): void;
        getRequestProperties(): $Map<string, $List<string>>;
        setAllowUserInteraction(arg0: boolean): void;
        getAllowUserInteraction(): boolean;
        setIfModifiedSince(arg0: number): void;
        static setDefaultUseCaches(arg0: string, arg1: boolean): void;
        setDefaultUseCaches(arg0: boolean): void;
        static getDefaultUseCaches(arg0: string): boolean;
        getDefaultUseCaches(): boolean;
        getContentType(): string;
        getHeaderFieldLong(arg0: string, arg1: number): number;
        getHeaderFieldDate(arg0: string, arg1: number): number;
        static getFileNameMap(): $FileNameMap;
        static setFileNameMap(arg0: $FileNameMap_): void;
        setConnectTimeout(arg0: number): void;
        getConnectTimeout(): number;
        setReadTimeout(arg0: number): void;
        getReadTimeout(): number;
        getContentEncoding(): string;
        getExpiration(): number;
        getDate(): number;
        getLastModified(): number;
        getHeaderFields(): $Map<string, $List<string>>;
        getHeaderFieldInt(arg0: string, arg1: number): number;
        getHeaderFieldKey(arg0: number): string;
        getOutputStream(): $OutputStream;
        setDoInput(arg0: boolean): void;
        getDoInput(): boolean;
        setDoOutput(arg0: boolean): void;
        getDoOutput(): boolean;
        static setDefaultAllowUserInteraction(arg0: boolean): void;
        static getDefaultAllowUserInteraction(): boolean;
        getIfModifiedSince(): number;
        /**
         * @deprecated
         */
        static setDefaultRequestProperty(arg0: string, arg1: string): void;
        /**
         * @deprecated
         */
        static getDefaultRequestProperty(arg0: string): string;
        static setContentHandlerFactory(arg0: $ContentHandlerFactory_): void;
        getInputStream(): $InputStream;
        getContent(arg0: $Class<never>[]): $Object;
        getContent(): $Object;
        getPermission(): $Permission;
        setRequestProperty(arg0: string, arg1: string): void;
        getURL(): $URL;
        setUseCaches(arg0: boolean): void;
        getContentLength(): number;
        connect(): void;
        get contentLengthLong(): number;
        get requestProperties(): $Map<string, $List<string>>;
        get contentType(): string;
        get contentEncoding(): string;
        get expiration(): number;
        get date(): number;
        get lastModified(): number;
        get headerFields(): $Map<string, $List<string>>;
        get outputStream(): $OutputStream;
        static set contentHandlerFactory(value: $ContentHandlerFactory_);
        get inputStream(): $InputStream;
        get permission(): $Permission;
        get URL(): $URL;
        get contentLength(): number;
    }
    export class $ProtocolFamily {
    }
    export interface $ProtocolFamily {
        name(): string;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolFamily}.
     */
    export type $ProtocolFamily_ = (() => string);
    export class $Authenticator {
        static setDefault(arg0: $Authenticator): void;
        static requestPasswordAuthentication(arg0: $InetAddress, arg1: number, arg2: string, arg3: string, arg4: string): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string, arg6: $URL, arg7: $Authenticator$RequestorType_): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: $Authenticator, arg1: string, arg2: $InetAddress, arg3: number, arg4: string, arg5: string, arg6: string, arg7: $URL, arg8: $Authenticator$RequestorType_): $PasswordAuthentication;
        requestPasswordAuthenticationInstance(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string, arg6: $URL, arg7: $Authenticator$RequestorType_): $PasswordAuthentication;
        static getDefault(): $Authenticator;
        constructor();
    }
    export class $InetSocketAddress extends $SocketAddress {
        getHostString(): string;
        static createUnresolved(arg0: string, arg1: number): $InetSocketAddress;
        getAddress(): $InetAddress;
        isUnresolved(): boolean;
        getHostName(): string;
        getPort(): number;
        constructor(arg0: string, arg1: number);
        constructor(arg0: $InetAddress, arg1: number);
        constructor(arg0: number);
        get hostString(): string;
        get address(): $InetAddress;
        get unresolved(): boolean;
        get hostName(): string;
        get port(): number;
    }
    export class $PasswordAuthentication {
        getPassword(): string[];
        getUserName(): string;
        constructor(arg0: string, arg1: string[]);
        get password(): string[];
        get userName(): string;
    }
    export class $Socket implements $Closeable {
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        getTcpNoDelay(): boolean;
        getOOBInline(): boolean;
        getKeepAlive(): boolean;
        getReuseAddress(): boolean;
        /**
         * @deprecated
         */
        static setSocketImplFactory(arg0: $SocketImplFactory_): void;
        bind(arg0: $SocketAddress): void;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        getLocalPort(): number;
        isInputShutdown(): boolean;
        isOutputShutdown(): boolean;
        sendUrgentData(arg0: number): void;
        getOutputStream(): $OutputStream;
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $Socket;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        shutdownInput(): void;
        shutdownOutput(): void;
        getInputStream(): $InputStream;
        getPort(): number;
        getChannel(): $SocketChannel;
        isClosed(): boolean;
        setKeepAlive(arg0: boolean): void;
        setOOBInline(arg0: boolean): void;
        setReuseAddress(arg0: boolean): void;
        setReceiveBufferSize(arg0: number): void;
        setSoLinger(arg0: boolean, arg1: number): void;
        setSoTimeout(arg0: number): void;
        setTcpNoDelay(arg0: boolean): void;
        setTrafficClass(arg0: number): void;
        getReceiveBufferSize(): number;
        getSendBufferSize(): number;
        getSoLinger(): number;
        getSoTimeout(): number;
        getTrafficClass(): number;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        setSendBufferSize(arg0: number): void;
        connect(arg0: $SocketAddress, arg1: number): void;
        connect(arg0: $SocketAddress): void;
        close(): void;
        /**
         * @deprecated
         */
        constructor(arg0: $InetAddress, arg1: number, arg2: boolean);
        constructor(arg0: $Proxy);
        constructor();
        constructor(arg0: $InetAddress, arg1: number);
        constructor(arg0: string, arg1: number, arg2: $InetAddress, arg3: number);
        constructor(arg0: string, arg1: number);
        constructor(arg0: $InetAddress, arg1: number, arg2: $InetAddress, arg3: number);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: number, arg2: boolean);
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
        static set socketImplFactory(value: $SocketImplFactory_);
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        get localPort(): number;
        get inputShutdown(): boolean;
        get outputShutdown(): boolean;
        get outputStream(): $OutputStream;
        get connected(): boolean;
        get localAddress(): $InetAddress;
        get inputStream(): $InputStream;
        get port(): number;
        get channel(): $SocketChannel;
        get closed(): boolean;
    }
    export class $HttpURLConnection extends $URLConnection {
        getErrorStream(): $InputStream;
        setRequestMethod(arg0: string): void;
        getResponseCode(): number;
        disconnect(): void;
        setInstanceFollowRedirects(arg0: boolean): void;
        setAuthenticator(arg0: $Authenticator): void;
        setFixedLengthStreamingMode(arg0: number): void;
        setFixedLengthStreamingMode(arg0: number): void;
        setChunkedStreamingMode(arg0: number): void;
        static setFollowRedirects(arg0: boolean): void;
        static getFollowRedirects(): boolean;
        getInstanceFollowRedirects(): boolean;
        getRequestMethod(): string;
        getResponseMessage(): string;
        usingProxy(): boolean;
        static HTTP_SEE_OTHER: number;
        static HTTP_CLIENT_TIMEOUT: number;
        static HTTP_BAD_REQUEST: number;
        static HTTP_ACCEPTED: number;
        static HTTP_NOT_ACCEPTABLE: number;
        static HTTP_PROXY_AUTH: number;
        static HTTP_REQ_TOO_LONG: number;
        static HTTP_RESET: number;
        static HTTP_LENGTH_REQUIRED: number;
        static HTTP_VERSION: number;
        static HTTP_PRECON_FAILED: number;
        static HTTP_GATEWAY_TIMEOUT: number;
        static HTTP_PAYMENT_REQUIRED: number;
        /**
         * @deprecated
         */
        static HTTP_SERVER_ERROR: number;
        static HTTP_NOT_MODIFIED: number;
        static HTTP_BAD_METHOD: number;
        static HTTP_BAD_GATEWAY: number;
        static HTTP_MOVED_PERM: number;
        static HTTP_NO_CONTENT: number;
        static HTTP_ENTITY_TOO_LARGE: number;
        static HTTP_MOVED_TEMP: number;
        static HTTP_NOT_AUTHORITATIVE: number;
        static HTTP_UNAVAILABLE: number;
        static HTTP_USE_PROXY: number;
        static HTTP_INTERNAL_ERROR: number;
        static HTTP_OK: number;
        static HTTP_MULT_CHOICE: number;
        static HTTP_CONFLICT: number;
        static HTTP_CREATED: number;
        static HTTP_UNAUTHORIZED: number;
        static HTTP_FORBIDDEN: number;
        static HTTP_NOT_IMPLEMENTED: number;
        static HTTP_GONE: number;
        static HTTP_UNSUPPORTED_TYPE: number;
        static HTTP_PARTIAL: number;
        static HTTP_NOT_FOUND: number;
        get errorStream(): $InputStream;
        get responseCode(): number;
        set authenticator(value: $Authenticator);
        set chunkedStreamingMode(value: number);
        get responseMessage(): string;
    }
    export class $SocketAddress implements $Serializable {
        constructor();
    }
    export class $URLStreamHandler {
        constructor();
    }
    export class $DatagramPacket {
        setSocketAddress(arg0: $SocketAddress): void;
        setData(arg0: number[], arg1: number, arg2: number): void;
        setData(arg0: number[]): void;
        setAddress(arg0: $InetAddress): void;
        getAddress(): $InetAddress;
        getPort(): number;
        getOffset(): number;
        getData(): number[];
        setPort(arg0: number): void;
        getSocketAddress(): $SocketAddress;
        getLength(): number;
        setLength(arg0: number): void;
        constructor(arg0: number[], arg1: number, arg2: number, arg3: $InetAddress, arg4: number);
        constructor(arg0: number[], arg1: number);
        constructor(arg0: number[], arg1: number, arg2: $InetAddress, arg3: number);
        constructor(arg0: number[], arg1: number, arg2: $SocketAddress);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: $SocketAddress);
        get offset(): number;
    }
    export class $ContentHandler {
        getContent(arg0: $URLConnection): $Object;
        getContent(arg0: $URLConnection, arg1: $Class<any>[]): $Object;
        constructor();
    }
    export class $DatagramSocketImplFactory {
    }
    export interface $DatagramSocketImplFactory {
        createDatagramSocketImpl(): $DatagramSocketImpl;
    }
    /**
     * Values that may be interpreted as {@link $DatagramSocketImplFactory}.
     */
    export type $DatagramSocketImplFactory_ = (() => $DatagramSocketImpl);
    export class $SocketOption<T> {
    }
    export interface $SocketOption<T> {
        name(): string;
        type(): $Class<T>;
    }
    export class $Proxy$Type extends $Enum<$Proxy$Type> {
        static values(): $Proxy$Type[];
        static valueOf(arg0: string): $Proxy$Type;
        static SOCKS: $Proxy$Type;
        static HTTP: $Proxy$Type;
        static DIRECT: $Proxy$Type;
    }
    /**
     * Values that may be interpreted as {@link $Proxy$Type}.
     */
    export type $Proxy$Type_ = "direct" | "http" | "socks";
    export class $Authenticator$RequestorType extends $Enum<$Authenticator$RequestorType> {
        static values(): $Authenticator$RequestorType[];
        static valueOf(arg0: string): $Authenticator$RequestorType;
        static PROXY: $Authenticator$RequestorType;
        static SERVER: $Authenticator$RequestorType;
    }
    /**
     * Values that may be interpreted as {@link $Authenticator$RequestorType}.
     */
    export type $Authenticator$RequestorType_ = "proxy" | "server";
}
