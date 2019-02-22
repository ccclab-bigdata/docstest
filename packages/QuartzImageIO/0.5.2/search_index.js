var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#QuartzImageIO-1",
    "page": "Readme",
    "title": "QuartzImageIO",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package provides support for loading and saving images using native libraries on OSX.  This package was split off from Images.jl to make image I/O more modular."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Add the package withPkg.add(\"QuartzImageIO\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "QuartzImageIO will be used as needed if you\'ve saidusing FileIOin your session or module. You should not generally say using QuartzImageIO.  See FileIO for further details.It\'s worth pointing out that packages such as Images load FileIO."
},

{
    "location": "#Alternatives-1",
    "page": "Readme",
    "title": "Alternatives",
    "category": "section",
    "text": "If QuartzImageIO does not provide the functionality you need, an alternative is ImageMagick. You can have both packages installed, and FileIO will manage their interaction."
},

{
    "location": "autodocs/#QuartzImageIO.check_null",
    "page": "Docstrings",
    "title": "QuartzImageIO.check_null",
    "category": "function",
    "text": "check_null(x)\n\nTriggers an error if x is NULL, else returns x \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuartzImageIO.save_",
    "page": "Docstrings",
    "title": "QuartzImageIO.save_",
    "category": "function",
    "text": "save_(f, img, image_type)\n\nf is the file to save to, of type FileIO.File{DataFormat}\nimage_type should be one of Apple\'s image types (eg. \"public.jpeg\")\npermute_horizontal, if true, will transpose the image (flip x and y)\nmapi is the mapping to apply to the data before saving. Defaults to identity. A useful alternative value is clamp01nan.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "QuartzImageIO.CFBooleanGetValueQuartzImageIO.CFDataCreateQuartzImageIO.CFDataGetBytePtrQuartzImageIO.CFDictionaryGetValueQuartzImageIO.CFDictionaryRefQuartzImageIO.CFNumberGetValueQuartzImageIO.CFReleaseQuartzImageIO.CFShowQuartzImageIO.CFStringGetCStringQuartzImageIO.CFStringRefQuartzImageIO.CFURLCreateWithFileSystemPathQuartzImageIO.CFURLRefQuartzImageIO.CGBitmapContextCreateQuartzImageIO.CGBitmapContextCreateImageQuartzImageIO.CGColorSpaceCreateDeviceRGBQuartzImageIO.CGColorSpaceCreateWithNameQuartzImageIO.CGColorSpaceRefQuartzImageIO.CGContextRefQuartzImageIO.CGDataProviderCopyDataQuartzImageIO.CGDisplayNoErrQuartzImageIO.CGEventNoErrQuartzImageIO.CGFLOAT_DEFINEDQuartzImageIO.CGFLOAT_IS_DOUBLEQuartzImageIO.CGFLOAT_MAXQuartzImageIO.CGFLOAT_MINQuartzImageIO.CGGlyphMaxQuartzImageIO.CGGlyphMinQuartzImageIO.CGImageDestinationAddImageQuartzImageIO.CGImageDestinationCreateWithURLQuartzImageIO.CGImageDestinationFinalizeQuartzImageIO.CGImageDestinationRefQuartzImageIO.CGImageGetAlphaInfoQuartzImageIO.CGImageGetBitsPerComponentQuartzImageIO.CGImageGetBitsPerPixelQuartzImageIO.CGImageGetColorSpaceQuartzImageIO.CGImageGetDataProviderQuartzImageIO.CGImageRefQuartzImageIO.CGImageReleaseQuartzImageIO.CGImageSourceCopyPropertiesAtIndexQuartzImageIO.CGImageSourceCreateImageAtIndexQuartzImageIO.CGImageSourceCreateWithDataQuartzImageIO.CGImageSourceCreateWithURLQuartzImageIO.CGImageSourceGetCountQuartzImageIO.CGImageSourceGetStatusQuartzImageIO.CGImageSourceGetStatusAtIndexQuartzImageIO.CGImageSourceGetTypeQuartzImageIO.CGPDFDataFormatJPEG2000QuartzImageIO.CGPDFDataFormatJPEGEncodedQuartzImageIO.CGPDFDataFormatRawQuartzImageIO.CGRectMaxXEdgeQuartzImageIO.CGRectMaxYEdgeQuartzImageIO.CGRectMinXEdgeQuartzImageIO.CGRectMinYEdgeQuartzImageIO.CGVECTOR_DEFINEDQuartzImageIO.Color1QuartzImageIO.Color2QuartzImageIO.Color3QuartzImageIO.Color4QuartzImageIO.CopyImagePixelsQuartzImageIO.NSStringQuartzImageIO.QuartzImageIOQuartzImageIO.WritingImageFailedQuartzImageIO.__init__QuartzImageIO.alpha_and_depthQuartzImageIO.check_nullQuartzImageIO.evalQuartzImageIO.fillcolor!QuartzImageIO.fillgray!QuartzImageIO.fillgrayalpha!QuartzImageIO.foundationQuartzImageIO.getblobQuartzImageIO.imageioQuartzImageIO.includeQuartzImageIO.kCFNumberCFIndexTypeQuartzImageIO.kCFNumberCGFloatTypeQuartzImageIO.kCFNumberCharTypeQuartzImageIO.kCFNumberDoubleTypeQuartzImageIO.kCFNumberFloat32TypeQuartzImageIO.kCFNumberFloat64TypeQuartzImageIO.kCFNumberFloatTypeQuartzImageIO.kCFNumberIntTypeQuartzImageIO.kCFNumberLongLongTypeQuartzImageIO.kCFNumberLongTypeQuartzImageIO.kCFNumberMaxTypeQuartzImageIO.kCFNumberNSIntegerTypeQuartzImageIO.kCFNumberSInt16TypeQuartzImageIO.kCFNumberSInt32TypeQuartzImageIO.kCFNumberSInt64TypeQuartzImageIO.kCFNumberSInt8TypeQuartzImageIO.kCFNumberShortTypeQuartzImageIO.kCGAnnotatedSessionEventTapQuartzImageIO.kCGAnyInputEventTypeQuartzImageIO.kCGAssistiveTechHighWindowLevelQuartzImageIO.kCGAssistiveTechHighWindowLevelKeyQuartzImageIO.kCGBackingStoreBufferedQuartzImageIO.kCGBackingStoreNonretainedQuartzImageIO.kCGBackingStoreRetainedQuartzImageIO.kCGBackstopMenuLevelQuartzImageIO.kCGBackstopMenuLevelKeyQuartzImageIO.kCGBaseWindowLevelQuartzImageIO.kCGBaseWindowLevelKeyQuartzImageIO.kCGBitmapAlphaInfoMaskQuartzImageIO.kCGBitmapByteOrder16BigQuartzImageIO.kCGBitmapByteOrder16HostQuartzImageIO.kCGBitmapByteOrder16LittleQuartzImageIO.kCGBitmapByteOrder32BigQuartzImageIO.kCGBitmapByteOrder32HostQuartzImageIO.kCGBitmapByteOrder32LittleQuartzImageIO.kCGBitmapByteOrderDefaultQuartzImageIO.kCGBitmapByteOrderMaskQuartzImageIO.kCGBitmapFloatComponentsQuartzImageIO.kCGBitmapFloatInfoMaskQuartzImageIO.kCGBlendModeClearQuartzImageIO.kCGBlendModeColorQuartzImageIO.kCGBlendModeColorBurnQuartzImageIO.kCGBlendModeColorDodgeQuartzImageIO.kCGBlendModeCopyQuartzImageIO.kCGBlendModeDarkenQuartzImageIO.kCGBlendModeDestinationAtopQuartzImageIO.kCGBlendModeDestinationInQuartzImageIO.kCGBlendModeDestinationOutQuartzImageIO.kCGBlendModeDestinationOverQuartzImageIO.kCGBlendModeDifferenceQuartzImageIO.kCGBlendModeExclusionQuartzImageIO.kCGBlendModeHardLightQuartzImageIO.kCGBlendModeHueQuartzImageIO.kCGBlendModeLightenQuartzImageIO.kCGBlendModeLuminosityQuartzImageIO.kCGBlendModeMultiplyQuartzImageIO.kCGBlendModeNormalQuartzImageIO.kCGBlendModeOverlayQuartzImageIO.kCGBlendModePlusDarkerQuartzImageIO.kCGBlendModePlusLighterQuartzImageIO.kCGBlendModeSaturationQuartzImageIO.kCGBlendModeScreenQuartzImageIO.kCGBlendModeSoftLightQuartzImageIO.kCGBlendModeSourceAtopQuartzImageIO.kCGBlendModeSourceInQuartzImageIO.kCGBlendModeSourceOutQuartzImageIO.kCGBlendModeXORQuartzImageIO.kCGCaptureNoFillQuartzImageIO.kCGCaptureNoOptionsQuartzImageIO.kCGColorConversionTransformApplySpaceQuartzImageIO.kCGColorConversionTransformFromSpaceQuartzImageIO.kCGColorConversionTransformToSpaceQuartzImageIO.kCGColorSpaceModelCMYKQuartzImageIO.kCGColorSpaceModelDeviceNQuartzImageIO.kCGColorSpaceModelIndexedQuartzImageIO.kCGColorSpaceModelLabQuartzImageIO.kCGColorSpaceModelMonochromeQuartzImageIO.kCGColorSpaceModelPatternQuartzImageIO.kCGColorSpaceModelRGBQuartzImageIO.kCGColorSpaceModelUnknownQuartzImageIO.kCGConfigureForAppOnlyQuartzImageIO.kCGConfigureForSessionQuartzImageIO.kCGConfigurePermanentlyQuartzImageIO.kCGCursorWindowLevelQuartzImageIO.kCGCursorWindowLevelKeyQuartzImageIO.kCGDesktopIconWindowLevelQuartzImageIO.kCGDesktopIconWindowLevelKeyQuartzImageIO.kCGDesktopWindowLevelQuartzImageIO.kCGDesktopWindowLevelKeyQuartzImageIO.kCGDirectMainDisplayQuartzImageIO.kCGDisplayAddFlagQuartzImageIO.kCGDisplayBeginConfigurationFlagQuartzImageIO.kCGDisplayBlendNormalQuartzImageIO.kCGDisplayBlendSolidColorQuartzImageIO.kCGDisplayDesktopShapeChangedFlagQuartzImageIO.kCGDisplayDisabledFlagQuartzImageIO.kCGDisplayEnabledFlagQuartzImageIO.kCGDisplayFadeReservationInvalidTokenQuartzImageIO.kCGDisplayMirrorFlagQuartzImageIO.kCGDisplayMovedFlagQuartzImageIO.kCGDisplayRemoveFlagQuartzImageIO.kCGDisplaySetMainFlagQuartzImageIO.kCGDisplaySetModeFlagQuartzImageIO.kCGDisplayStreamFrameStatusFrameBlankQuartzImageIO.kCGDisplayStreamFrameStatusFrameCompleteQuartzImageIO.kCGDisplayStreamFrameStatusFrameIdleQuartzImageIO.kCGDisplayStreamFrameStatusStoppedQuartzImageIO.kCGDisplayStreamUpdateDirtyRectsQuartzImageIO.kCGDisplayStreamUpdateMovedRectsQuartzImageIO.kCGDisplayStreamUpdateReducedDirtyRectsQuartzImageIO.kCGDisplayStreamUpdateRefreshedRectsQuartzImageIO.kCGDisplayUnMirrorFlagQuartzImageIO.kCGDockWindowLevelQuartzImageIO.kCGDockWindowLevelKeyQuartzImageIO.kCGDraggingWindowLevelQuartzImageIO.kCGDraggingWindowLevelKeyQuartzImageIO.kCGEncodingFontSpecificQuartzImageIO.kCGEncodingMacRomanQuartzImageIO.kCGErrorCannotCompleteQuartzImageIO.kCGErrorFailureQuartzImageIO.kCGErrorIllegalArgumentQuartzImageIO.kCGErrorInvalidConnectionQuartzImageIO.kCGErrorInvalidContextQuartzImageIO.kCGErrorInvalidOperationQuartzImageIO.kCGErrorNoneAvailableQuartzImageIO.kCGErrorNotImplementedQuartzImageIO.kCGErrorRangeCheckQuartzImageIO.kCGErrorSuccessQuartzImageIO.kCGErrorTypeCheckQuartzImageIO.kCGEventFilterMaskPermitAllEventsQuartzImageIO.kCGEventFilterMaskPermitLocalKeyboardEventsQuartzImageIO.kCGEventFilterMaskPermitLocalMouseEventsQuartzImageIO.kCGEventFilterMaskPermitSystemDefinedEventsQuartzImageIO.kCGEventFlagMaskAlphaShiftQuartzImageIO.kCGEventFlagMaskAlternateQuartzImageIO.kCGEventFlagMaskCommandQuartzImageIO.kCGEventFlagMaskControlQuartzImageIO.kCGEventFlagMaskHelpQuartzImageIO.kCGEventFlagMaskNonCoalescedQuartzImageIO.kCGEventFlagMaskNumericPadQuartzImageIO.kCGEventFlagMaskSecondaryFnQuartzImageIO.kCGEventFlagMaskShiftQuartzImageIO.kCGEventFlagsChangedQuartzImageIO.kCGEventKeyDownQuartzImageIO.kCGEventKeyUpQuartzImageIO.kCGEventLeftMouseDownQuartzImageIO.kCGEventLeftMouseDraggedQuartzImageIO.kCGEventLeftMouseUpQuartzImageIO.kCGEventMaskForAllEventsQuartzImageIO.kCGEventMouseMovedQuartzImageIO.kCGEventMouseSubtypeDefaultQuartzImageIO.kCGEventMouseSubtypeTabletPointQuartzImageIO.kCGEventMouseSubtypeTabletProximityQuartzImageIO.kCGEventNullQuartzImageIO.kCGEventOtherMouseDownQuartzImageIO.kCGEventOtherMouseDraggedQuartzImageIO.kCGEventOtherMouseUpQuartzImageIO.kCGEventRightMouseDownQuartzImageIO.kCGEventRightMouseDraggedQuartzImageIO.kCGEventRightMouseUpQuartzImageIO.kCGEventScrollWheelQuartzImageIO.kCGEventSourceGroupIDQuartzImageIO.kCGEventSourceStateCombinedSessionStateQuartzImageIO.kCGEventSourceStateHIDSystemStateQuartzImageIO.kCGEventSourceStateIDQuartzImageIO.kCGEventSourceStatePrivateQuartzImageIO.kCGEventSourceUnixProcessIDQuartzImageIO.kCGEventSourceUserDataQuartzImageIO.kCGEventSourceUserIDQuartzImageIO.kCGEventSuppressionStateRemoteMouseDragQuartzImageIO.kCGEventSuppressionStateSuppressionIntervalQuartzImageIO.kCGEventSupressionStateRemoteMouseDragQuartzImageIO.kCGEventSupressionStateSupressionIntervalQuartzImageIO.kCGEventTabletPointerQuartzImageIO.kCGEventTabletProximityQuartzImageIO.kCGEventTapDisabledByTimeoutQuartzImageIO.kCGEventTapDisabledByUserInputQuartzImageIO.kCGEventTapOptionDefaultQuartzImageIO.kCGEventTapOptionListenOnlyQuartzImageIO.kCGEventTargetProcessSerialNumberQuartzImageIO.kCGEventTargetUnixProcessIDQuartzImageIO.kCGFloatingWindowLevelQuartzImageIO.kCGFloatingWindowLevelKeyQuartzImageIO.kCGFontIndexInvalidQuartzImageIO.kCGFontIndexMaxQuartzImageIO.kCGFontPostScriptFormatType1QuartzImageIO.kCGFontPostScriptFormatType3QuartzImageIO.kCGFontPostScriptFormatType42QuartzImageIO.kCGGesturePhaseBeganQuartzImageIO.kCGGesturePhaseCancelledQuartzImageIO.kCGGesturePhaseChangedQuartzImageIO.kCGGesturePhaseEndedQuartzImageIO.kCGGesturePhaseMayBeginQuartzImageIO.kCGGesturePhaseNoneQuartzImageIO.kCGGlyphMaxQuartzImageIO.kCGGradientDrawsAfterEndLocationQuartzImageIO.kCGGradientDrawsBeforeStartLocationQuartzImageIO.kCGHIDEventTapQuartzImageIO.kCGHeadInsertEventTapQuartzImageIO.kCGHelpWindowLevelQuartzImageIO.kCGHelpWindowLevelKeyQuartzImageIO.kCGImageAlphaFirstQuartzImageIO.kCGImageAlphaLastQuartzImageIO.kCGImageAlphaNoneQuartzImageIO.kCGImageAlphaNoneSkipFirstQuartzImageIO.kCGImageAlphaNoneSkipLastQuartzImageIO.kCGImageAlphaOnlyQuartzImageIO.kCGImageAlphaPremultipliedFirstQuartzImageIO.kCGImageAlphaPremultipliedLastQuartzImageIO.kCGImageByteOrder16BigQuartzImageIO.kCGImageByteOrder16LittleQuartzImageIO.kCGImageByteOrder32BigQuartzImageIO.kCGImageByteOrder32LittleQuartzImageIO.kCGImageByteOrderMaskQuartzImageIO.kCGInterpolationDefaultQuartzImageIO.kCGInterpolationHighQuartzImageIO.kCGInterpolationLowQuartzImageIO.kCGInterpolationMediumQuartzImageIO.kCGInterpolationNoneQuartzImageIO.kCGKeyboardEventAutorepeatQuartzImageIO.kCGKeyboardEventKeyboardTypeQuartzImageIO.kCGKeyboardEventKeycodeQuartzImageIO.kCGLineCapButtQuartzImageIO.kCGLineCapRoundQuartzImageIO.kCGLineCapSquareQuartzImageIO.kCGLineJoinBevelQuartzImageIO.kCGLineJoinMiterQuartzImageIO.kCGLineJoinRoundQuartzImageIO.kCGMainMenuWindowLevelQuartzImageIO.kCGMainMenuWindowLevelKeyQuartzImageIO.kCGMaxDisplayReservationIntervalQuartzImageIO.kCGMaximumWindowLevelQuartzImageIO.kCGMaximumWindowLevelKeyQuartzImageIO.kCGMinimumWindowLevelQuartzImageIO.kCGMinimumWindowLevelKeyQuartzImageIO.kCGModalPanelWindowLevelQuartzImageIO.kCGModalPanelWindowLevelKeyQuartzImageIO.kCGMomentumScrollPhaseBeginQuartzImageIO.kCGMomentumScrollPhaseContinueQuartzImageIO.kCGMomentumScrollPhaseEndQuartzImageIO.kCGMomentumScrollPhaseNoneQuartzImageIO.kCGMouseButtonCenterQuartzImageIO.kCGMouseButtonLeftQuartzImageIO.kCGMouseButtonRightQuartzImageIO.kCGMouseDownEventMaskingDeadSwitchTimeoutQuartzImageIO.kCGMouseEventButtonNumberQuartzImageIO.kCGMouseEventClickStateQuartzImageIO.kCGMouseEventDeltaXQuartzImageIO.kCGMouseEventDeltaYQuartzImageIO.kCGMouseEventInstantMouserQuartzImageIO.kCGMouseEventNumberQuartzImageIO.kCGMouseEventPressureQuartzImageIO.kCGMouseEventSubtypeQuartzImageIO.kCGMouseEventWindowUnderMousePointerQuartzImageIO.kCGMouseEventWindowUnderMousePointerThatCanHandleThisEventQuartzImageIO.kCGNormalWindowLevelQuartzImageIO.kCGNormalWindowLevelKeyQuartzImageIO.kCGNullDirectDisplayQuartzImageIO.kCGNullWindowIDQuartzImageIO.kCGNumReservedWindowLevelsQuartzImageIO.kCGNumberOfEventSuppressionStatesQuartzImageIO.kCGNumberOfEventSupressionStatesQuartzImageIO.kCGNumberOfWindowLevelKeysQuartzImageIO.kCGOverlayWindowLevelQuartzImageIO.kCGOverlayWindowLevelKeyQuartzImageIO.kCGPDFArtBoxQuartzImageIO.kCGPDFBleedBoxQuartzImageIO.kCGPDFCropBoxQuartzImageIO.kCGPDFMediaBoxQuartzImageIO.kCGPDFObjectTypeArrayQuartzImageIO.kCGPDFObjectTypeBooleanQuartzImageIO.kCGPDFObjectTypeDictionaryQuartzImageIO.kCGPDFObjectTypeIntegerQuartzImageIO.kCGPDFObjectTypeNameQuartzImageIO.kCGPDFObjectTypeNullQuartzImageIO.kCGPDFObjectTypeRealQuartzImageIO.kCGPDFObjectTypeStreamQuartzImageIO.kCGPDFObjectTypeStringQuartzImageIO.kCGPDFTrimBoxQuartzImageIO.kCGPathEOFillQuartzImageIO.kCGPathEOFillStrokeQuartzImageIO.kCGPathElementAddCurveToPointQuartzImageIO.kCGPathElementAddLineToPointQuartzImageIO.kCGPathElementAddQuadCurveToPointQuartzImageIO.kCGPathElementCloseSubpathQuartzImageIO.kCGPathElementMoveToPointQuartzImageIO.kCGPathFillQuartzImageIO.kCGPathFillStrokeQuartzImageIO.kCGPathStrokeQuartzImageIO.kCGPatternTilingConstantSpacingQuartzImageIO.kCGPatternTilingConstantSpacingMinimalDistortionQuartzImageIO.kCGPatternTilingNoDistortionQuartzImageIO.kCGPopUpMenuWindowLevelQuartzImageIO.kCGPopUpMenuWindowLevelKeyQuartzImageIO.kCGRenderingIntentAbsoluteColorimetricQuartzImageIO.kCGRenderingIntentDefaultQuartzImageIO.kCGRenderingIntentPerceptualQuartzImageIO.kCGRenderingIntentRelativeColorimetricQuartzImageIO.kCGRenderingIntentSaturationQuartzImageIO.kCGScreenSaverWindowLevelQuartzImageIO.kCGScreenSaverWindowLevelKeyQuartzImageIO.kCGScreenUpdateOperationMoveQuartzImageIO.kCGScreenUpdateOperationReducedDirtyRectangleCountQuartzImageIO.kCGScreenUpdateOperationRefreshQuartzImageIO.kCGScrollEventUnitLineQuartzImageIO.kCGScrollEventUnitPixelQuartzImageIO.kCGScrollPhaseBeganQuartzImageIO.kCGScrollPhaseCancelledQuartzImageIO.kCGScrollPhaseChangedQuartzImageIO.kCGScrollPhaseEndedQuartzImageIO.kCGScrollPhaseMayBeginQuartzImageIO.kCGScrollWheelEventDeltaAxis1QuartzImageIO.kCGScrollWheelEventDeltaAxis2QuartzImageIO.kCGScrollWheelEventDeltaAxis3QuartzImageIO.kCGScrollWheelEventFixedPtDeltaAxis1QuartzImageIO.kCGScrollWheelEventFixedPtDeltaAxis2QuartzImageIO.kCGScrollWheelEventFixedPtDeltaAxis3QuartzImageIO.kCGScrollWheelEventInstantMouserQuartzImageIO.kCGScrollWheelEventIsContinuousQuartzImageIO.kCGScrollWheelEventMomentumPhaseQuartzImageIO.kCGScrollWheelEventPointDeltaAxis1QuartzImageIO.kCGScrollWheelEventPointDeltaAxis2QuartzImageIO.kCGScrollWheelEventPointDeltaAxis3QuartzImageIO.kCGScrollWheelEventScrollCountQuartzImageIO.kCGScrollWheelEventScrollPhaseQuartzImageIO.kCGSessionEventTapQuartzImageIO.kCGStatusWindowLevelQuartzImageIO.kCGStatusWindowLevelKeyQuartzImageIO.kCGTabletEventDeviceIDQuartzImageIO.kCGTabletEventPointButtonsQuartzImageIO.kCGTabletEventPointPressureQuartzImageIO.kCGTabletEventPointXQuartzImageIO.kCGTabletEventPointYQuartzImageIO.kCGTabletEventPointZQuartzImageIO.kCGTabletEventRotationQuartzImageIO.kCGTabletEventTangentialPressureQuartzImageIO.kCGTabletEventTiltXQuartzImageIO.kCGTabletEventTiltYQuartzImageIO.kCGTabletEventVendor1QuartzImageIO.kCGTabletEventVendor2QuartzImageIO.kCGTabletEventVendor3QuartzImageIO.kCGTabletProximityEventCapabilityMaskQuartzImageIO.kCGTabletProximityEventDeviceIDQuartzImageIO.kCGTabletProximityEventEnterProximityQuartzImageIO.kCGTabletProximityEventPointerIDQuartzImageIO.kCGTabletProximityEventPointerTypeQuartzImageIO.kCGTabletProximityEventSystemTabletIDQuartzImageIO.kCGTabletProximityEventTabletIDQuartzImageIO.kCGTabletProximityEventVendorIDQuartzImageIO.kCGTabletProximityEventVendorPointerSerialNumberQuartzImageIO.kCGTabletProximityEventVendorPointerTypeQuartzImageIO.kCGTabletProximityEventVendorUniqueIDQuartzImageIO.kCGTailAppendEventTapQuartzImageIO.kCGTextClipQuartzImageIO.kCGTextFillQuartzImageIO.kCGTextFillClipQuartzImageIO.kCGTextFillStrokeQuartzImageIO.kCGTextFillStrokeClipQuartzImageIO.kCGTextInvisibleQuartzImageIO.kCGTextStrokeQuartzImageIO.kCGTextStrokeClipQuartzImageIO.kCGTornOffMenuWindowLevelQuartzImageIO.kCGTornOffMenuWindowLevelKeyQuartzImageIO.kCGUtilityWindowLevelQuartzImageIO.kCGUtilityWindowLevelKeyQuartzImageIO.kCGWindowBackingCFNumberTypeQuartzImageIO.kCGWindowIDCFNumberTypeQuartzImageIO.kCGWindowImageBestResolutionQuartzImageIO.kCGWindowImageBoundsIgnoreFramingQuartzImageIO.kCGWindowImageDefaultQuartzImageIO.kCGWindowImageNominalResolutionQuartzImageIO.kCGWindowImageOnlyShadowsQuartzImageIO.kCGWindowImageShouldBeOpaqueQuartzImageIO.kCGWindowListExcludeDesktopElementsQuartzImageIO.kCGWindowListOptionAllQuartzImageIO.kCGWindowListOptionIncludingWindowQuartzImageIO.kCGWindowListOptionOnScreenAboveWindowQuartzImageIO.kCGWindowListOptionOnScreenBelowWindowQuartzImageIO.kCGWindowListOptionOnScreenOnlyQuartzImageIO.kCGWindowSharingCFNumberTypeQuartzImageIO.kCGWindowSharingNoneQuartzImageIO.kCGWindowSharingReadOnlyQuartzImageIO.kCGWindowSharingReadWriteQuartzImageIO.loadQuartzImageIO.load_QuartzImageIO.mapCGQuartzImageIO.ogcQuartzImageIO.omsQuartzImageIO.permutedims_horizontalQuartzImageIO.read_and_release_imgsrcQuartzImageIO.saveQuartzImageIO.save_QuartzImageIO.selectorQuartzImageIO.to_contiguousQuartzImageIO.to_explicit"
},

]}