var Messages = [];
Messages.strConfirm = "Confirm";
Messages.strDoYouReally = "Do you really want to execute \"%s\"?";
Messages.strDropDatabaseStrongWarning = "You are about to DESTROY a complete database!";
Messages.strDatabaseRenameToSameName = "Cannot rename database to the same name. Change the name and try again";
Messages.strDropTableStrongWarning = "You are about to DESTROY a complete table!";
Messages.strTruncateTableStrongWarning = "You are about to TRUNCATE a complete table!";
Messages.strDeleteTrackingData = "Delete tracking data for this table?";
Messages.strDeleteTrackingDataMultiple = "Delete tracking data for these tables?";
Messages.strDeleteTrackingVersion = "Delete tracking data for this version?";
Messages.strDeleteTrackingVersionMultiple = "Delete tracking data for these versions?";
Messages.strDeletingTrackingEntry = "Delete entry from tracking report?";
Messages.strDeletingTrackingData = "Deleting tracking data";
Messages.strDroppingPrimaryKeyIndex = "Dropping Primary Key/Index";
Messages.strDroppingForeignKey = "Dropping Foreign key.";
Messages.strOperationTakesLongTime = "This operation could take a long time. Proceed anyway?";
Messages.strDropUserGroupWarning = "Do you really want to delete user group \"%s\"?";
Messages.strConfirmDeleteQBESearch = "Do you really want to delete the search \"%s\"?";
Messages.strConfirmNavigation = "You have unsaved changes; are you sure you want to leave this page?";
Messages.strConfirmRowChange = "You are trying to reduce the number of rows, but have already entered data in those rows which will be lost. Do you wish to continue?";
Messages.strDropUserWarning = "Do you really want to revoke the selected user(s) ?";
Messages.strDeleteCentralColumnWarning = "Do you really want to delete this central column?";
Messages.strDropRTEitems = "Do you really want to delete the selected items?";
Messages.strDropPartitionWarning = "Do you really want to DROP the selected partition(s)? This will also DELETE the data related to the selected partition(s)!";
Messages.strTruncatePartitionWarning = "Do you really want to TRUNCATE the selected partition(s)?";
Messages.strRemovePartitioningWarning = "Do you really want to remove partitioning?";
Messages.strResetSlaveWarning = "Do you really want to RESET SLAVE?";
Messages.strChangeColumnCollation = "This operation will attempt to convert your data to the new collation. In rare cases, especially where a character doesn\'t exist in the new collation, this process could cause the data to appear incorrectly under the new collation; in this case we suggest you revert to the original collation and refer to the tips at <a href=\"%s\" target=\"garbled_data_wiki\">Garbled Data</a>.<br><br>Are you sure you wish to change the collation and convert the data?";
Messages.strChangeAllColumnCollationsWarning = "Through this operation, MySQL attempts to map the data values between collations. If the character sets are incompatible, there may be data loss and this lost data may <b>NOT</b> be recoverable simply by changing back the column collation(s). <b>To convert existing data, it is suggested to use the column(s) editing feature (the \"Change\" Link) on the table structure page. </b><br><br>Are you sure you wish to change all the column collations and convert the data?";
Messages.strSaveAndClose = "Save & close";
Messages.strReset = "Reset";
Messages.strResetAll = "Reset all";
Messages.strFormEmpty = "Missing value in the form!";
Messages.strRadioUnchecked = "Select at least one of the options!";
Messages.strEnterValidNumber = "Please enter a valid number!";
Messages.strEnterValidLength = "Please enter a valid length!";
Messages.strAddIndex = "Add index";
Messages.strEditIndex = "Edit index";
Messages.strAddToIndex = "Add %s column(s) to index";
Messages.strCreateSingleColumnIndex = "Create single-column index";
Messages.strCreateCompositeIndex = "Create composite index";
Messages.strCompositeWith = "Composite with:";
Messages.strMissingColumn = "Please select column(s) for the index.";
Messages.strPreviewSQL = "Preview SQL";
Messages.strSimulateDML = "Simulate query";
Messages.strMatchedRows = "Matched rows:";
Messages.strSQLQuery = "SQL query:";
Messages.strYValues = "Y values";
Messages.strEmptyQuery = "Please enter the SQL query first.";
Messages.strHostEmpty = "The host name is empty!";
Messages.strUserEmpty = "The user name is empty!";
Messages.strPasswordEmpty = "The password is empty!";
Messages.strPasswordNotSame = "The passwords aren\'t the same!";
Messages.strRemovingSelectedUsers = "Removing Selected Users";
Messages.strClose = "Close";
Messages.strTemplateCreated = "Template was created.";
Messages.strTemplateLoaded = "Template was loaded.";
Messages.strTemplateUpdated = "Template was updated.";
Messages.strTemplateDeleted = "Template was deleted.";
Messages.strOther = "Other";
Messages.strThousandsSeparator = ",";
Messages.strDecimalSeparator = ".";
Messages.strChartConnectionsTitle = "Connections / Processes";
Messages.strIncompatibleMonitorConfig = "Local monitor configuration incompatible!";
Messages.strIncompatibleMonitorConfigDescription = "The chart arrangement configuration in your browsers local storage is not compatible anymore to the newer version of the monitor dialog. It is very likely that your current configuration will not work anymore. Please reset your configuration to default in the <i>Settings</i> menu.";
Messages.strQueryCacheEfficiency = "Query cache efficiency";
Messages.strQueryCacheUsage = "Query cache usage";
Messages.strQueryCacheUsed = "Query cache used";
Messages.strSystemCPUUsage = "System CPU usage";
Messages.strSystemMemory = "System memory";
Messages.strSystemSwap = "System swap";
Messages.strAverageLoad = "Average load";
Messages.strTotalMemory = "Total memory";
Messages.strCachedMemory = "Cached memory";
Messages.strBufferedMemory = "Buffered memory";
Messages.strFreeMemory = "Free memory";
Messages.strUsedMemory = "Used memory";
Messages.strTotalSwap = "Total swap";
Messages.strCachedSwap = "Cached swap";
Messages.strUsedSwap = "Used swap";
Messages.strFreeSwap = "Free swap";
Messages.strBytesSent = "Bytes sent";
Messages.strBytesReceived = "Bytes received";
Messages.strConnections = "Connections";
Messages.strProcesses = "Processes";
Messages.strB = "B";
Messages.strKiB = "KiB";
Messages.strMiB = "MiB";
Messages.strGiB = "GiB";
Messages.strTiB = "TiB";
Messages.strPiB = "PiB";
Messages.strEiB = "EiB";
Messages.strNTables = "%d table(s)";
Messages.strQuestions = "Questions";
Messages.strTraffic = "Traffic";
Messages.strSettings = "Settings";
Messages.strAddChart = "Add chart to grid";
Messages.strAddOneSeriesWarning = "Please add at least one variable to the series!";
Messages.strNone = "None";
Messages.strResumeMonitor = "Resume monitor";
Messages.strPauseMonitor = "Pause monitor";
Messages.strStartRefresh = "Start auto refresh";
Messages.strStopRefresh = "Stop auto refresh";
Messages.strBothLogOn = "general_log and slow_query_log are enabled.";
Messages.strGenLogOn = "general_log is enabled.";
Messages.strSlowLogOn = "slow_query_log is enabled.";
Messages.strBothLogOff = "slow_query_log and general_log are disabled.";
Messages.strLogOutNotTable = "log_output is not set to TABLE.";
Messages.strLogOutIsTable = "log_output is set to TABLE.";
Messages.strSmallerLongQueryTimeAdvice = "slow_query_log is enabled, but the server logs only queries that take longer than %d seconds. It is advisable to set this long_query_time 0-2 seconds, depending on your system.";
Messages.strLongQueryTimeSet = "long_query_time is set to %d second(s).";
Messages.strSettingsAppliedGlobal = "Following settings will be applied globally and reset to default on server restart:";
Messages.strSetLogOutput = "Set log_output to %s";
Messages.strEnableVar = "Enable %s";
Messages.strDisableVar = "Disable %s";
Messages.setSetLongQueryTime = "Set long_query_time to %d seconds.";
Messages.strNoSuperUser = "You can\'t change these variables. Please log in as root or contact your database administrator.";
Messages.strChangeSettings = "Change settings";
Messages.strCurrentSettings = "Current settings";
Messages.strChartTitle = "Chart title";
Messages.strDifferential = "Differential";
Messages.strDividedBy = "Divided by %s";
Messages.strUnit = "Unit";
Messages.strFromSlowLog = "From slow log";
Messages.strFromGeneralLog = "From general log";
Messages.strServerLogError = "The database name is not known for this query in the server\'s logs.";
Messages.strAnalysingLogsTitle = "Analysing logs";
Messages.strAnalysingLogs = "Analysing & loading logs. This may take a while.";
Messages.strCancelRequest = "Cancel request";
Messages.strCountColumnExplanation = "This column shows the amount of identical queries that are grouped together. However only the SQL query itself has been used as a grouping criteria, so the other attributes of queries, such as start time, may differ.";
Messages.strMoreCountColumnExplanation = "Since grouping of INSERTs queries has been selected, INSERT queries into the same table are also being grouped together, disregarding of the inserted data.";
Messages.strLogDataLoaded = "Log data loaded. Queries executed in this time span:";
Messages.strJumpToTable = "Jump to Log table";
Messages.strNoDataFoundTitle = "No data found";
Messages.strNoDataFound = "Log analysed, but no data found in this time span.";
Messages.strAnalyzing = "Analyzing…";
Messages.strExplainOutput = "Explain output";
Messages.strStatus = "Status";
Messages.strTime = "Time";
Messages.strTotalTime = "Total time:";
Messages.strProfilingResults = "Profiling results";
Messages.strTable = "Table";
Messages.strChart = "Chart";
Messages.strAliasDatabase = "Database";
Messages.strAliasTable = "Table";
Messages.strAliasColumn = "Column";
Messages.strFiltersForLogTable = "Log table filter options";
Messages.strFilter = "Filter";
Messages.strFilterByWordRegexp = "Filter queries by word/regexp:";
Messages.strIgnoreWhereAndGroup = "Group queries, ignoring variable data in WHERE clauses";
Messages.strSumRows = "Sum of grouped rows:";
Messages.strTotal = "Total:";
Messages.strLoadingLogs = "Loading logs";
Messages.strRefreshFailed = "Monitor refresh failed";
Messages.strInvalidResponseExplanation = "While requesting new chart data the server returned an invalid response. This is most likely because your session expired. Reloading the page and reentering your credentials should help.";
Messages.strReloadPage = "Reload page";
Messages.strAffectedRows = "Affected rows:";
Messages.strFailedParsingConfig = "Failed parsing config file. It doesn\'t seem to be valid JSON code.";
Messages.strFailedBuildingGrid = "Failed building chart grid with imported config. Resetting to default config…";
Messages.strImport = "Import";
Messages.strImportDialogTitle = "Import monitor configuration";
Messages.strImportDialogMessage = "Please select the file you want to import.";
Messages.strTableNameDialogMessage = "Please enter a valid table name.";
Messages.strDBNameDialogMessage = "Please enter a valid database name.";
Messages.strNoImportFile = "No files available on server for import!";
Messages.strAnalyzeQuery = "Analyse query";
Messages.strAdvisorSystem = "Advisor system";
Messages.strPerformanceIssues = "Possible performance issues";
Messages.strIssuse = "Issue";
Messages.strRecommendation = "Recommendation";
Messages.strRuleDetails = "Rule details";
Messages.strJustification = "Justification";
Messages.strFormula = "Used variable / formula";
Messages.strTest = "Test";
Messages.strFormatting = "Formatting SQL…";
Messages.strNoParam = "No parameters found!";
Messages.strGo = "Go";
Messages.strCancel = "Cancel";
Messages.strPageSettings = "Page-related settings";
Messages.strApply = "Apply";
Messages.strLoading = "Loading…";
Messages.strAbortedRequest = "Request aborted!!";
Messages.strProcessingRequest = "Processing request";
Messages.strRequestFailed = "Request failed!!";
Messages.strErrorProcessingRequest = "Error in processing request";
Messages.strErrorCode = "Error code: %s";
Messages.strErrorText = "Error text: %s";
Messages.strErrorConnection = "It seems that the connection to server has been lost. Please check your network connectivity and server status.";
Messages.strNoDatabasesSelected = "No databases selected.";
Messages.strNoAccountSelected = "No accounts selected.";
Messages.strDroppingColumn = "Dropping column";
Messages.strAddingPrimaryKey = "Adding primary key";
Messages.strOK = "OK";
Messages.strDismiss = "Click to dismiss this notification";
Messages.strRenamingDatabases = "Renaming databases";
Messages.strCopyingDatabase = "Copying database";
Messages.strChangingCharset = "Changing charset";
Messages.strNo = "No";
Messages.strForeignKeyCheck = "Enable foreign key checks";
Messages.strErrorRealRowCount = "Failed to get real row count.";
Messages.strSearching = "Searching";
Messages.strHideSearchResults = "Hide search results";
Messages.strShowSearchResults = "Show search results";
Messages.strBrowsing = "Browsing";
Messages.strDeleting = "Deleting";
Messages.strConfirmDeleteResults = "Delete the matches for the %s table?";
Messages.MissingReturn = "The definition of a stored function must contain a RETURN statement!";
Messages.strExport = "Export";
Messages.NoExportable = "No routine is exportable. Required privileges may be lacking.";
Messages.enum_editor = "ENUM/SET editor";
Messages.enum_columnVals = "Values for column %s";
Messages.enum_newColumnVals = "Values for a new column";
Messages.enum_hint = "Enter each value in a separate field.";
Messages.enum_addValue = "Add %d value(s)";
Messages.strImportCSV = "Note: If the file contains multiple tables, they will be combined into one.";
Messages.strHideQueryBox = "Hide query box";
Messages.strShowQueryBox = "Show query box";
Messages.strEdit = "Edit";
Messages.strDelete = "Delete";
Messages.strNotValidRowNumber = "%d is not valid row number.";
Messages.strBrowseForeignValues = "Browse foreign values";
Messages.strNoAutoSavedQuery = "No previously auto-saved query is available. Loading default query.";
Messages.strPreviousSaveQuery = "You have a previously saved query. Click Get auto-saved query to load the query.";
Messages.strBookmarkVariable = "Variable %d:";
Messages.pickColumn = "Pick";
Messages.pickColumnTitle = "Column selector";
Messages.searchList = "Search this list";
Messages.strEmptyCentralList = "No columns in the central list. Make sure the Central columns list for database %s has columns that are not present in the current table.";
Messages.seeMore = "See more";
Messages.confirmTitle = "Are you sure?";
Messages.makeConsistentMessage = "This action may change some of the columns definition.<br>Are you sure you want to continue?";
Messages.strContinue = "Continue";
Messages.strAddPrimaryKey = "Add primary key";
Messages.strPrimaryKeyAdded = "Primary key added.";
Messages.strToNextStep = "Taking you to next step…";
Messages.strFinishMsg = "The first step of normalization is complete for table \'%s\'.";
Messages.strEndStep = "End of step";
Messages.str2NFNormalization = "Second step of normalization (2NF)";
Messages.strDone = "Done";
Messages.strConfirmPd = "Confirm partial dependencies";
Messages.strSelectedPd = "Selected partial dependencies are as follows:";
Messages.strPdHintNote = "Note: a, b -> d,f implies values of columns a and b combined together can determine values of column d and column f.";
Messages.strNoPdSelected = "No partial dependencies selected!";
Messages.strBack = "Back";
Messages.strShowPossiblePd = "Show me the possible partial dependencies based on data in the table";
Messages.strHidePd = "Hide partial dependencies list";
Messages.strWaitForPd = "Sit tight! It may take few seconds depending on data size and column count of the table.";
Messages.strStep = "Step";
Messages.strMoveRepeatingGroup = "<ol><b>The following actions will be performed:</b><li>DROP columns %s from the table %s</li><li>Create the following table</li>";
Messages.strNewTablePlaceholder = "Enter new table name";
Messages.strNewColumnPlaceholder = "Enter column name";
Messages.str3NFNormalization = "Third step of normalization (3NF)";
Messages.strConfirmTd = "Confirm transitive dependencies";
Messages.strSelectedTd = "Selected dependencies are as follows:";
Messages.strNoTdSelected = "No dependencies selected!";
Messages.strSave = "Save";
Messages.strHideSearchCriteria = "Hide search criteria";
Messages.strShowSearchCriteria = "Show search criteria";
Messages.strRangeSearch = "Range search";
Messages.strColumnMax = "Column maximum:";
Messages.strColumnMin = "Column minimum:";
Messages.strMinValue = "Minimum value:";
Messages.strMaxValue = "Maximum value:";
Messages.strHideFindNReplaceCriteria = "Hide find and replace criteria";
Messages.strShowFindNReplaceCriteria = "Show find and replace criteria";
Messages.strDisplayHelp = "<ul><li>Each point represents a data row.</li><li>Hovering over a point will show its label.</li><li>To zoom in, select a section of the plot with the mouse.</li><li>Click reset zoom button to come back to original state.</li><li>Click a data point to view and possibly edit the data row.</li><li>The plot can be resized by dragging it along the bottom right corner.</li></ul>";
Messages.strHelpTitle = "Zoom search instructions";
Messages.strInputNull = "<strong>Select two columns</strong>";
Messages.strSameInputs = "<strong>Select two different columns</strong>";
Messages.strDataPointContent = "Data point content";
Messages.strIgnore = "Ignore";
Messages.strCopy = "Copy";
Messages.strX = "X";
Messages.strY = "Y";
Messages.strPoint = "Point";
Messages.strPointN = "Point %d";
Messages.strLineString = "Linestring";
Messages.strPolygon = "Polygon";
Messages.strGeometry = "Geometry";
Messages.strInnerRing = "Inner ring";
Messages.strOuterRing = "Outer ring";
Messages.strAddPoint = "Add a point";
Messages.strAddInnerRing = "Add an inner ring";
Messages.strYes = "Yes";
Messages.strCopyEncryptionKey = "Do you want to copy encryption key?";
Messages.strEncryptionKey = "Encryption key";
Messages.strMysqlAllowedValuesTipTime = "MySQL accepts additional values not selectable by the slider; key in those values directly if desired";
Messages.strMysqlAllowedValuesTipDate = "MySQL accepts additional values not selectable by the datepicker; key in those values directly if desired";
Messages.strLockToolTip = "Indicates that you have made changes to this page; you will be prompted for confirmation before abandoning changes";
Messages.strSelectReferencedKey = "Select referenced key";
Messages.strSelectForeignKey = "Select Foreign Key";
Messages.strPleaseSelectPrimaryOrUniqueKey = "Please select the primary key or a unique key!";
Messages.strChangeDisplay = "Choose column to display";
Messages.strLeavingDesigner = "You haven\'t saved the changes in the layout. They will be lost if you don\'t save them. Do you want to continue?";
Messages.strQueryEmpty = "value/subQuery is empty";
Messages.strAddTables = "Add tables from other databases";
Messages.strPageName = "Page name";
Messages.strSavePage = "Save page";
Messages.strSavePageAs = "Save page as";
Messages.strOpenPage = "Open page";
Messages.strDeletePage = "Delete page";
Messages.strUntitled = "Untitled";
Messages.strSelectPage = "Please select a page to continue";
Messages.strEnterValidPageName = "Please enter a valid page name";
Messages.strLeavingPage = "Do you want to save the changes to the current page?";
Messages.strSuccessfulPageDelete = "Successfully deleted the page";
Messages.strExportRelationalSchema = "Export relational schema";
Messages.strModificationSaved = "Modifications have been saved";
Messages.strObjectsCreated = "%d object(s) created.";
Messages.strColumnName = "Column name";
Messages.strSubmit = "Submit";
Messages.strCellEditHint = "Press escape to cancel editing.";
Messages.strSaveCellWarning = "You have edited some data and they have not been saved. Are you sure you want to leave this page before saving the data?";
Messages.strColOrderHint = "Drag to reorder.";
Messages.strSortHint = "Click to sort results by this column.";
Messages.strMultiSortHint = "Shift+Click to add this column to ORDER BY clause or to toggle ASC/DESC.<br>- Ctrl+Click or Alt+Click (Mac: Shift+Option+Click) to remove column from ORDER BY clause";
Messages.strColMarkHint = "Click to mark/unmark.";
Messages.strColNameCopyHint = "Double-click to copy column name.";
Messages.strColVisibHint = "Click the drop-down arrow<br>to toggle column\'s visibility.";
Messages.strShowAllCol = "Show all";
Messages.strAlertNonUnique = "This table does not contain a unique column. Features related to the grid edit, checkbox, Edit, Copy and Delete links may not work after saving.";
Messages.strEnterValidHex = "Please enter a valid hexadecimal string. Valid characters are 0-9, A-F.";
Messages.strShowAllRowsWarning = "Do you really want to see all of the rows? For a big table this could crash the browser.";
Messages.strOriginalLength = "Original length";
Messages.dropImportMessageCancel = "cancel";
Messages.dropImportMessageAborted = "Aborted";
Messages.dropImportMessageFailed = "Failed";
Messages.dropImportMessageSuccess = "Success";
Messages.dropImportImportResultHeader = "Import status";
Messages.dropImportDropFiles = "Drop files here";
Messages.dropImportSelectDB = "Select database first";
Messages.print = "Print";
Messages.back = "Back";
Messages.strGridEditFeatureHint = "You can also edit most values<br>by double-clicking directly on them.";
Messages.strGoToLink = "Go to link:";
Messages.strColNameCopyTitle = "Copy column name.";
Messages.strColNameCopyText = "Right-click the column name to copy it to your clipboard.";
Messages.strGeneratePassword = "Generate password";
Messages.strGenerate = "Generate";
Messages.strChangePassword = "Change password";
Messages.strMore = "More";
Messages.strShowPanel = "Show panel";
Messages.strHidePanel = "Hide panel";
Messages.strUnhideNavItem = "Show hidden navigation tree items.";
Messages.linkWithMain = "Link with main panel";
Messages.unlinkWithMain = "Unlink from main panel";
Messages.strInvalidPage = "The requested page was not found in the history, it may have expired.";
Messages.strNewerVersion = "A newer version of phpMyAdmin is available and you should consider upgrading. The newest version is %s, released on %s.";
Messages.strLatestAvailable = ", latest stable version:";
Messages.strUpToDate = "up to date";
Messages.strCreateView = "Create view";
Messages.strSendErrorReport = "Send error report";
Messages.strSubmitErrorReport = "Submit error report";
Messages.strErrorOccurred = "A fatal JavaScript error has occurred. Would you like to send an error report?";
Messages.strChangeReportSettings = "Change report settings";
Messages.strShowReportDetails = "Show report details";
Messages.strTimeOutError = "Your export is incomplete, due to a low execution time limit at the PHP level!";
Messages.strTooManyInputs = "Warning: a form on this page has more than %d fields. On submission, some of the fields might be ignored, due to PHP\'s max_input_vars configuration.";
Messages.phpErrorsFound = "<div class=\"error\">Some errors have been detected on the server!<br>Please look at the bottom of this window.<div><input id=\"pma_ignore_errors_popup\" type=\"submit\" value=\"Ignore\" class=\"btn btn-secondary floatright message_errors_found\"><input id=\"pma_ignore_all_errors_popup\" type=\"submit\" value=\"Ignore All\" class=\"btn btn-secondary floatright message_errors_found\"></div></div>";
Messages.phpErrorsBeingSubmitted = "<div class=\"error\">Some errors have been detected on the server!<br>As per your settings, they are being submitted currently, please be patient.<br><img src=\"./themes/pmahomme/img/ajax_clock_small.gif\" width=\"16\" height=\"16\" alt=\"ajax clock\"></div>";
Messages.strCopyQueryButtonSuccess = "Successfully copied!";
Messages.strCopyQueryButtonFailure = "Copying failed!";
Messages.strConsoleRequeryConfirm = "Execute this query again?";
Messages.strConsoleDeleteBookmarkConfirm = "Do you really want to delete this bookmark?";
Messages.strConsoleDebugError = "Some error occurred while getting SQL debug info.";
Messages.strConsoleDebugSummary = "%s queries executed %s times in %s seconds.";
Messages.strConsoleDebugArgsSummary = "%s argument(s) passed";
Messages.strConsoleDebugShowArgs = "Show arguments";
Messages.strConsoleDebugHideArgs = "Hide arguments";
Messages.strConsoleDebugTimeTaken = "Time taken:";
Messages.strNoLocalStorage = "There was a problem accessing your browser storage, some features may not work properly for you. It is likely that the browser doesn\'t support storage or the quota limit has been reached. In Firefox, corrupted storage can also cause such a problem, clearing your \"Offline Website Data\" might help. In Safari, such problem is commonly caused by \"Private Mode Browsing\".";
Messages.strCopyTablesTo = "Copy tables to";
Messages.strAddPrefix = "Add table prefix";
Messages.strReplacePrefix = "Replace table with prefix";
Messages.strCopyPrefix = "Copy table with prefix";
Messages.strExtrWeak = "Extremely weak";
Messages.strVeryWeak = "Very weak";
Messages.strWeak = "Weak";
Messages.strGood = "Good";
Messages.strStrong = "Strong";
Messages.strU2FTimeout = "Timed out waiting for security key activation.";
Messages.strU2FError = "Failed security key activation (%s).";
Messages.strTableAlreadyExists = "Table %s already exists!";
Messages.strHide = "Hide";
Messages.strStructure = "Structure";
var pmaThemeImage = './themes/pmahomme/img/';
var mysqlDocTemplate = './url.php?url=https%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F5.5%2Fen%2F%25s.html';
var maxInputVars = 1000;
if ($.datepicker) {
$.datepicker.regional['']['closeText'] = "Done";
$.datepicker.regional['']['prevText'] = "Prev";
$.datepicker.regional['']['nextText'] = "Next";
$.datepicker.regional['']['currentText'] = "Today";
$.datepicker.regional['']['monthNames'] = ["January","February","March","April","May","June","July","August","September","October","November","December",];
$.datepicker.regional['']['monthNamesShort'] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
$.datepicker.regional['']['dayNames'] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
$.datepicker.regional['']['dayNamesShort'] = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",];
$.datepicker.regional['']['dayNamesMin'] = ["Su","Mo","Tu","We","Th","Fr","Sa",];
$.datepicker.regional['']['weekHeader'] = "Wk";
$.datepicker.regional['']['showMonthAfterYear'] = false;
$.datepicker.regional['']['yearSuffix'] = "";
$.extend($.datepicker._defaults, $.datepicker.regional['']);
} /* if ($.datepicker) */

if ($.timepicker) {
$.timepicker.regional['']['timeText'] = "Time";
$.timepicker.regional['']['hourText'] = "Hour";
$.timepicker.regional['']['minuteText'] = "Minute";
$.timepicker.regional['']['secondText'] = "Second";
$.extend($.timepicker._defaults, $.timepicker.regional['']);
} /* if ($.timepicker) */

function extendingValidatorMessages() {
$.extend($.validator.messages, {
required: "This field is required", remote: "Please fix this field", email: "Please enter a valid email address", url: "Please enter a valid URL", date: "Please enter a valid date", dateISO: "Please enter a valid date ( ISO )", number: "Please enter a valid number", creditcard: "Please enter a valid credit card number", digits: "Please enter only digits", equalTo: "Please enter the same value again", maxlength: $.validator.format("Please enter no more than {0} characters"), minlength: $.validator.format("Please enter at least {0} characters"), rangelength: $.validator.format("Please enter a value between {0} and {1} characters long"), range: $.validator.format("Please enter a value between {0} and {1}"), max: $.validator.format("Please enter a value less than or equal to {0}"), min: $.validator.format("Please enter a value greater than or equal to {0}"), validationFunctionForDateTime: $.validator.format("Please enter a valid date or time"), validationFunctionForHex: $.validator.format("Please enter a valid HEX input"), validationFunctionForFuns: $.validator.format("Error")
});
} /* if ($.validator) */